workflow "Test and deploy to Heroku" {
  on = "push"
  resolves = ["release"]
}

action "login" {
  uses = "actions/heroku@master"
  args = "container:login"
  secrets = ["HEROKU_API_KEY"]
}

action "push" {
  uses = "actions/heroku@master"
  needs = "login"
  args = "cd server && container:push -a casting-server web"
  secrets = ["HEROKU_API_KEY"]
}

action "release" {
  uses = "actions/heroku@master"
  needs = "push"
  args = "cd server && container:release -a casting-server web"
  secrets = ["HEROKU_API_KEY"]
}
