const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "empPass123",
    tasks: [
      {
        title: "Prepare project report",
        description: "Compile weekly progress and submit to manager",
        date: "2026-03-20",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix login bug",
        description: "Resolve authentication issue in user portal",
        date: "2026-03-21",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Team meeting",
        description: "Discuss sprint backlog with team",
        date: "2026-03-22",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "empPass234",
    tasks: [
      {
        title: "Design homepage UI",
        description: "Create responsive layout for homepage",
        date: "2026-03-20",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client feedback review",
        description: "Analyze feedback and prepare improvement plan",
        date: "2026-03-21",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update CSS styles",
        description: "Refactor styles for consistency",
        date: "2026-03-23",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "empPass345",
    tasks: [
      {
        title: "Database backup",
        description: "Perform scheduled backup of production DB",
        date: "2026-03-20",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize queries",
        description: "Improve performance of slow SQL queries",
        date: "2026-03-22",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Bug triage",
        description: "Review and categorize reported issues",
        date: "2026-03-23",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "empPass456",
    tasks: [
      {
        title: "Prepare presentation",
        description: "Slides for quarterly review",
        date: "2026-03-20",
        category: "Presentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code review",
        description: "Review pull requests from teammates",
        date: "2026-03-21",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deploy update",
        description: "Push latest build to staging server",
        date: "2026-03-22",
        category: "Deployment",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "empPass567",
    tasks: [
      {
        title: "Write unit tests",
        description: "Add coverage for new features",
        date: "2026-03-20",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update documentation",
        description: "Revise API docs for new endpoints",
        date: "2026-03-21",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Security audit",
        description: "Check system for vulnerabilities",
        date: "2026-03-23",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];


const admin =[{
  "email": "admin@example.com",
  "password": "adminSecure789"
}
];

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