workflow "Test and deploy to Heroku" {
  on = "push"
  resolves = ["release"]
}

action "build" {
  uses = "actions/docker/cli@master"
  args = "build -f ./server/prod.Dockerfile -t casting-server:lataest ./server"
}

action "login" {
  uses = "actions/heroku@master"
  needs = "build"
  args = "container:login"
  secrets = ["HEROKU_API_KEY"]
}

action "push" {
  uses = "actions/heroku@master"
  needs = "login"
  args = "container:push -a casting-server web"
  secrets = ["HEROKU_API_KEY"]
}

action "release" {
  uses = "actions/heroku@master"
  needs = "push"
  args = "container:release -a casting-server web"
  secrets = ["HEROKU_API_KEY"]
}
