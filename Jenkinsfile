pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                url: 'https://github.com/rishondabreo/express-app1.git',
                credentialsId: 'github-credentials'
            }
        }
        stage('Test') {
            steps {
                echo 'Express app build successful!'
            }
        }
    }
}
