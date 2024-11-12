pipeline {
    agent any
    tools {
        nodejs '20.12.2'
    }
    stages {
        stage('Print Versions') {
            steps {
                sh 'npm version'
            }
        }
        stage('Install') { 
            steps {
                sh 'npm install'
            }
        }
        stage('Build') { 
            steps {
                sh 'npm run build'
            }
        }
        stage('Download Artifacts') {
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }
}
