
categories = Category.create!([
  { title: 'Frontend' },
  { title: 'Backend'},
  { title: 'Frameworks' }])


tests = Test.create!([
  { title: 'HTML', level: 0, category_id: categories[0].id, author_id: User.first.id },
  { title: 'CSS', level: 0, category_id: categories[0].id, author_id: User.first.id },
  { title: 'Ruby', level: 2, category_id: categories[1].id, author_id: User.first.id },
  { title: 'Swift', level: 1, category_id: categories[1].id, author_id: User.first.id },
  { title: 'Rails', level: 3, category_id: categories[2].id, author_id: User.first.id },
  { title: 'Node', level: 2, category_id: categories[2].id, author_id: User.first.id }])

questions = Question.create([
  { body: 'Is HTML for web?', test_id: tests[0].id },
  { body: 'What version of CSS is actual?', test_id: tests[1].id },
  { body: 'What is Ruby?', test_id: tests[2].id },
  { body: 'Swift is game by Nintendo, isn`t it?', test_id: tests[3].id },
  { body: 'What is Rails?', test_id: tests[4].id },
  { body: 'What language support Node?', test_id: tests[5].id }])

Answer.create!([
  { body: 'No', question_id: questions[0].id },
  { body: 'Yes', correct: true, question_id: questions[0].id },
  { body: '2', question_id: questions[1].id },
  { body: '3', correct: true, question_id: questions[1].id },
  { body: 'Mineral', question_id: questions[2].id },
  { body: 'Programming language', correct: true, question_id: questions[2].id },
  { body: 'Yes', question_id: questions[3].id },
  { body: 'No', correct: true, question_id: questions[3].id },
  { body: 'Road for trains', question_id: questions[4].id },
  { body: 'Ruby`s framework', correct: true, question_id: questions[4].id },
  { body: 'English', question_id: questions[5].id },
  { body: 'JavaScript', correct: true, question_id: questions[5].id }])
