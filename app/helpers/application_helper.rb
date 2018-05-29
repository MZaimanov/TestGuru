module ApplicationHelper
  def current_year
    Time.current.year
  end

  def github_url
    content_tag(:a, 'Код на GitHub', href: 'https://github.com/MZaimanov/TestGuru', target: 'blank')
  end
end
