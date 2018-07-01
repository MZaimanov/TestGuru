
users = User.create!([
  { first_name: 'Mike', email: "mike@mail.ru", password: 'password' },
  { first_name: 'Dimon', email: "dimon@mail.ru", password: 'password' },
  { first_name: 'Linda', email: "linda@mail.ru", password: 'password' }
  ])

categories = Category.create!([
  { title: 'Frontend' },
  { title: 'Backend'},
  { title: 'Other' }
  ])

tests = Test.create!([
  { title: 'HTML',   level: 1, category_id: categories[0].id, author_id: users[0].id },
  { title: 'Rails',  level: 1, category_id: categories[0].id, author_id: users[0].id },
  { title: 'Ruby',   level: 2, category_id: categories[1].id, author_id: users[0].id },
  { title: 'Go',     level: 3, category_id: categories[1].id, author_id: users[0].id },
  { title: 'SQL',    level: 1, category_id: categories[2].id, author_id: users[0].id }
  ])

questions = Question.create!([
  { body: 'Что такое Ruby?',                          test_id: tests[2].id },
  { body: 'Назовите тип языка Go',                    test_id: tests[3].id },
  { body: 'Что обозначает тег head?',                 test_id: tests[0].id },
  { body: 'Что такое ActiveRecord?',                  test_id: tests[2].id },
  { body: 'Как расшифровывается аббревиатура SQL?',   test_id: tests[4].id }
  ])

Answer.create!([
  { body: 'это камень',
    correct: false, question_id: questions[0].id },
  { body: 'компилируемый',
    correct: true,  question_id: questions[1].id },
  { body: 'это блочный элемент',
    correct: true,  question_id: questions[2].id },
  { body: 'Active Record это M в MVC - модель - которая является слоем в системе, ответственным за представление бизнес-логики и данных.',
    correct: false, question_id: questions[3].id },
  { body: 'язык структурированных запросов',
    correct: false, question_id: questions[4].id }
  ])


