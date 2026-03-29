const employees = [
  {
    "id": 1,
    "name": "Amit Sharma",
    "email": "em1@e.com",
    "password": "empPass123",
    "tasks": [
      {
        "taskNumber": 1,
        "title": "Prepare project report",
        "description": "Compile weekly progress and submit to manager",
        "date": "2026-03-20",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 2,
        "title": "Fix login bug",
        "description": "Resolve authentication issue in user portal",
        "date": "2026-03-21",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 3,
        "title": "Team meeting",
        "description": "Discuss sprint backlog with team",
        "date": "2026-03-22",
        "category": "Meeting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "completed": 1,
      "failed": 0,
      "newTask": 1
    }
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "email": "employee2@example.com",
    "password": "empPass234",
    "tasks": [
      {
        "taskNumber": 1,
        "title": "Design homepage UI",
        "description": "Create responsive layout for homepage",
        "date": "2026-03-20",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 2,
        "title": "Client feedback review",
        "description": "Analyze feedback and prepare improvement plan",
        "date": "2026-03-21",
        "category": "Analysis",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskNumber": 3,
        "title": "Update CSS styles",
        "description": "Refactor styles for consistency",
        "date": "2026-03-23",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "completed": 1,
      "failed": 0,
      "newTask": 1
    }
  },
  {
    "id": 3,
    "name": "Rohan Mehta",
    "email": "employee3@example.com",
    "password": "empPass345",
    "tasks": [
      {
        "taskNumber": 1,
        "title": "Database backup",
        "description": "Perform scheduled backup of production DB",
        "date": "2026-03-20",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskNumber": 2,
        "title": "Optimize queries",
        "description": "Improve performance of slow SQL queries",
        "date": "2026-03-22",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 3,
        "title": "Bug triage",
        "description": "Review and categorize reported issues",
        "date": "2026-03-23",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "completed": 1,
      "failed": 0,
      "newTask": 1
    }
  },
  {
    "id": 4,
    "name": "Sneha Kapoor",
    "email": "employee4@example.com",
    "password": "empPass456",
    "tasks": [
      {
        "taskNumber": 1,
        "title": "Prepare presentation",
        "description": "Slides for quarterly review",
        "date": "2026-03-20",
        "category": "Presentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 2,
        "title": "Code review",
        "description": "Review pull requests from teammates",
        "date": "2026-03-21",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskNumber": 3,
        "title": "Deploy update",
        "description": "Push latest build to staging server",
        "date": "2026-03-22",
        "category": "Deployment",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "completed": 1,
      "failed": 0,
      "newTask": 1
    }
  },
  {
    "id": 5,
    "name": "Anjali Singh",
    "email": "employee5@example.com",
    "password": "empPass567",
    "tasks": [
      {
        "taskNumber": 1,
        "title": "Write unit tests",
        "description": "Add coverage for new features",
        "date": "2026-03-20",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": true
      },
      {
        "taskNumber": 2,
        "title": "Update documentation",
        "description": "Revise API docs for new endpoints",
        "date": "2026-03-21",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskNumber": 3,
        "title": "Security audit",
        "description": "Check system for vulnerabilities",
        "date": "2026-03-23",
        "category": "Security",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "completed": 1,
      "failed": 0,
      "newTask": 1
    }
  }
];
const admin =[
  {
    "email": "admin@example.com",
    "password": "adminSecure789",
    "name": "System Administrator"
  }
]

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))   
    localStorage.setItem('admin',JSON.stringify(admin))

}
export const getLocalStorage=()=>{
    // const employees =JSON.parse(localStorage.getItem('employees'))
    // console.log(employees);
    
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
}