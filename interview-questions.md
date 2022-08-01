# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: You can add the foreign key by using migration and then creating a new column in the students table and it will be on the student model. The name of the foreign key would be student_id.

Researched answer: The file migration command will fix the mistake. Even after a database is created your able to generate the rails command to create a migration which allows additional columns to be created. When generating the migrate command it'll be displayed in snake_case, the command to achieve this is: 'rails generate migration' add_columns_to_list. You can outline the specific changes/additions you want to make to the database with 'add_column :lists, :item, :string' command' With the _ syntax upon the creation of the student model the foreign key would be student_id.

2. Which RESTful routes must always be passed params? Why?

Your answer: The 'show', 'edit' and 'destroy' route without an id there's no way of knowing which is being performed.

Researched answer: They need a unique identifier to show specific content, edit needs a unique identifier to outline which changes need to be made to a specific identifier. The destroy route is like the edit route, it needs a unique identifier to outline what needs to be deleted. Parameters are required for because with these specific routes their inputs have different outcomes that affect the application, therfore parameters are used to affect the outcome of the routes. 


3. Name three rails generator commands. What is created by each?

Your answer: Rails new, creates a new application. The db migrate allow edits like addition to add columns to a current database. The db generate, is used to create a new database.

Researched answer: Rails new creates a new rails application, installs the boilerplate code and framework in the directory that's created along with the command. Files are automatically installed for a Rails project called 'gems'. The db migrate is a feature of Active Record that allows you to make different types of changes to an exsisting database and effects the database schema over a period of time, changes include updating key-value property, add and delete columns. The db generates commands follows the MVC model, view and controller. This is the link between the UI and the database.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students Points to the index in the controller method

action: "POST" location: /students Points to forward/create which adds additional content

action: "GET" location: /students/new Defines a new function, there would be a form for the student.

action: "GET" location: /students/2 Directed at the show method of the location - student/2

action: "GET" location: /students/2/edit Edit method contents located in - student/2

action: "PATCH" location: /students/2 Updates to the student/2 location

action: "DELETE" location: /students/2 Destroy contents in student/2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
