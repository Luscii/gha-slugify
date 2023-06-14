import { Given, DataTable } from '@cucumber/cucumber'
import { GithubActionWorld } from './world'

function setEnvironmentVariables(this: GithubActionWorld, envVars: DataTable) {
  envVars.raw().forEach(([name, value]) => {
    this.setEnvironmentVariable(name, value)
  })
}

function setInputs(this: GithubActionWorld, inputs: DataTable) {
  inputs.raw().forEach(([name, value]) => {
    this.setInput(name, value)
  })
}

Given('a Github Action is configured with the following environment variables:', setEnvironmentVariables)
Given('is configured with the following environment variables:', setEnvironmentVariables)
Given('the following environment variables:', setEnvironmentVariables)
Given('the following inputs:', setInputs)
