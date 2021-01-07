// Instead of annotating an unnecessary import statement, the symbol _ is annotated, according to the annotation pattern.
def repoName = "open.workplus.io"
def version = env.BRANCH_NAME

pipeline {
    agent {
        docker {
            image 'node:10.23.0-alpine3.10' 
            args '-e HOME=/tmp -e NPM_CONFIG_PREFIX=/tmp/.npm'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage("Git Checkout") {
            steps {
                checkout scm
            }
        }

        stage("Bootstrap") {
            steps {
                sh 'npm install'
            }
        }

        stage("Build:open") {
            steps {
                sh 'npm run open:build'
            }
        }

        stage("Build:FED") {
            steps {
                sh 'npm run fed:build'
            }
        }

        stage("Deploy:open") {
            steps {
                sh 'echo "Deploy:open"'
            }
        }

        stage("Deploy:FED") {
            steps {
                sh 'echo "Deploy:FED"'
            }
        }
    }

    post {
        always {
            emailext(subject: '$DEFAULT_SUBJECT', body: '$DEFAULT_CONTENT', to: 'hejianxian@foreverht.com')
            cleanWs deleteDirs: true
        }
    }
}