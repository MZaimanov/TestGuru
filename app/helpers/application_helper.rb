module ApplicationHelper
  def current_year
    Time.current.year
  end

  def github_url
    content_tag(:a, 'Код на GitHub', href: 'https://github.com/MZaimanov/TestGuru', target: 'blank')
  end

  def flash_messages
    html = ''
    flash.each { |key, value| html << content_tag(:p, value, class: "flash #{key}") }
    html.html_safe
  end

  def welcome_message(user)
    link_to "Welcome, #{user.email} Guru", root_path
  end

end
