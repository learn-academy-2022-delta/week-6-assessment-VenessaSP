# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Will handle all the request for blog post route
class BlogPostsController < ApplicationController
  def index
    # ---2) For route i-e /blogpost, it will return all the blog posts 
    @posts = BlogPost.all
  end

  # ---3) For route i-e /blogpost/:id, it will return a single blogpost with specified id,
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) For route i-e /blogpost/new, will return a form for creating a new blogpost
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) For post request i-e /blogpost/new, will creat a new blogpost from the request body if the blogpost is valid it will return the show page of the blogpost and otherwise it will return the form.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) For route i-e /blogpost/:id/edit, will return a form to edit the blogpost with a specified id
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) It will update the blogpost with a new data form if inva
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) If deletion of blogpost is not successful it will be redirected to the show page of that blogpost 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) These are the private methods of the controller which includes some helper methods to be used inside the controller
  private
  def blog_post_params
    # ---10) Is validating the parms /  form data of the blogpost that has title and content in it. 
    params.require(:blog_post).permit(:title, :content)
  end
end
