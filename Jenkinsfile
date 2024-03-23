pipeline {
  agent any
  
  stages {
    stage('Checkout') {
      steps {
        // Checkout the source code from your Git repository
        git 'https://github.com/eyad-youssef/ParaBank_Playwright_AutomationFramework.git'
      }
    }
    
    stage('Install Dependencies') {
      steps {
        // Install Node.js and dependencies
        sh 'nvm install'
        sh 'npm install'
      }
    }
    
    stage('Run Tests') {
      steps {
        // Run Playwright tests
        sh 'npx playwright test BaseTest.spec.js --project=chromium --headed'
      }
    }
    
    stage('Publish Test Results') {
      steps {
        // Publish test results in JUnit format
        junit 'test-results/**/*.xml'
      }
    }
  }
  
  post {
    always {
      // Clean up artifacts or perform any necessary cleanup steps
      deleteDir()
    }
  }
}