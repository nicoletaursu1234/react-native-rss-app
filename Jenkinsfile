pipeline {
    agent {label "master"}
    stages {
        stage('build') {
            steps {
                bat 'npm install && npm start && npm run test'
            }
        }
    }
}




