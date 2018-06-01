module ApplicationHelper
  def current_year
    Time.current.year
  end

  def github_url
    content_tag(:a, 'Код на GitHub', href: 'https://github.com/MZaimanov/TestGuru', target: 'blank')
  end

  def flash_message(message_key)
    if flash[message_key]
      content_tag :p, flash[message_key], class: 'flash alert'
    end
  end

  def welcome_message(user)
    link_to "Welcome, #{user.email} Guru", root_path
  end

end
