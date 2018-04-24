# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  { first_name: 'Mike' },
  { first_name: 'Dimon' },
  { first_name: 'Linda' }
  ])

categories = Category.create([
  { title: 'Frontend' },
  { title: 'Backend'},
  { title: 'Other' }
  ])

tests = Test.create([
  { title: 'HTML',   level: 1, category_id: categories[0].id },
  { title: 'Rails',  level: 1, category_id: categories[0].id },
  { title: 'Ruby',   level: 2, category_id: categories[1].id },
  { title: 'Go',     level: 3, category_id: categories[1].id },
  { title: 'SQL',    level: 1, category_id: categories[2].id }
  ])

questions = Question.create([
  { body: 'Что такое Ruby?',                          test_id: tests[2].id },
  { body: 'Назовите тип языка Go',                    test_id: tests[3].id },
  { body: 'Что обозначает тег head?',                 test_id: tests[0].id },
  { body: 'Что такое ActiveRecord?',                  test_id: tests[2].id },
  { body: 'Как расшифровывается аббревиатура SQL?',   test_id: tests[4].id }
  ])

Answer.create([
  { body: 'это камень',
    correct: false, test_id: questions[0].id },
  { body: 'компилируемый',
    correct: true,  test_id: questions[1].id },
  { body: 'это блочный элемент',
    correct: true,  test_id: questions[2].id },
  { body: 'Active Record это M в MVC - модель - которая является слоем в системе, ответственным за представление бизнес-логики и данных.',
    correct: false, test_id: questions[3].id },
  { body: 'язык структурированных запросов',
    correct: false, test_id: questions[4].id }
  ])
