pipeline {
    agent {label "master"}
    stages {
        stage('build') {
            steps {
                bat 'npm install && npm run test'
            }
        }
    }
}




