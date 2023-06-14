import { IWorld, World } from '@cucumber/cucumber'

type GithubInputName = string
type GithubInputValue = string
type GithubInputs = { [name: GithubInputName]: GithubInputValue }
type GithubEnvironment = { [variable: string]: string }
type GithubOutputs = { [name: string]: string }

interface WorldParameters {
  inputs: GithubInputs,
  environment: GithubEnvironment
}

export class GithubActionWorld extends World<WorldParameters> {
  private inputs: GithubInputs
  private environment: GithubEnvironment
  public outputs: GithubOutputs = {}

  constructor(options: IWorld<WorldParameters>) {
    super(options)
    this.inputs = options.inputs
    this.environment = options.environment
  }

  setInput(name: string, value: string) {
    this.inputs[name] = value
  }

  setEnvironmentVariable(name: string, value: string) {
    this.environment[name] = value
  }

  setOutputs(outputs: GithubOutputs) {
    this.outputs = outputs
  }
}
