require "js"

def show_random_quote
  ruby_img = "/images/ruby.png"

  quotes = [
    {
      quote: "ルビィ、スクールアイドルがやりたい！ 花丸ちゃんと！",
      from: "ラブライブ！サンシャイン!! 1期4話"
    },
    {
      quote: "ラブライブは、遊びじゃない！",
      from: "ラブライブ！サンシャイン!! The School Idol Movie Over the Rainbow"
    },
    {
      quote: "歌いませんか？一緒に曲を。お姉ちゃんに贈る曲を作って、この光の中で…もう一度！",
      from: "ラブライブ！サンシャイン!! 2期8話"
    },
    {
      quote: "がんばルビィ！",
      from: ""
    },
    {
      quote: "うゆ…",
      from: ""
    },
    {
      quote: "おねいちゃあ…",
      from: ""
    },
  ]

  quote = quotes.sample

  output = ""
  output += "<div>「#{quote[:quote]}」</div>"
  output += "<div><img src='#{ruby_img}' style='max-width: 90%' /></div>"
  if quote[:from].size > 0
    output += "<div>出典: #{quote[:from]}</div>"
  else
    output += "<br />"
  end

  output_div = JS.global[:document].getElementById("ruby_output")
  output_div[:innerHTML] = output
end

button = JS.global[:document].getElementById "button"
button.addEventListener "click" do |e|
  show_random_quote
end