# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin.spec.js >> TC#2 - Validating registration receptionist | Positive
- Location: tests\Admin.spec.js:13:5

# Error details

```
Error: locator.click: InvalidSelectorError: Error while parsing selector `Launch Portal` - unexpected symbol "P" at position 7
    at syntaxError (<anonymous>:1748:11)
    at parseAttributeSelector (<anonymous>:1897:5)
    at Object.queryAll (<anonymous>:4971:22)
    at InjectedScript._queryEngineAll (<anonymous>:6645:49)
    at InjectedScript.querySelectorAll (<anonymous>:6632:30)
    at eval (eval at evaluate (:302:30), <anonymous>:2:35)
    at UtilityScript.evaluate (<anonymous>:304:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
Call log:
  - waiting for internal:role=Launch Portal

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic:
    - status [ref=e8]: Stats updated
    - status [ref=e14]: Welcome back, Abbas!
  - generic [ref=e15]:
    - generic [ref=e16]:
      - heading "AZ Coaching" [level=1] [ref=e18]:
        - img [ref=e19]
        - text: AZ Coaching
      - navigation "Main navigation" [ref=e21]:
        - link "Navigate to Dashboard" [ref=e22] [cursor=pointer]:
          - /url: /admin/dashboard
          - img [ref=e23]
          - generic [ref=e25]: Dashboard
        - link "Navigate to Students" [ref=e26] [cursor=pointer]:
          - /url: /admin/az-students
          - img [ref=e27]
          - generic [ref=e29]: Students
        - link "Navigate to Teachers" [ref=e30] [cursor=pointer]:
          - /url: /admin/az-teachers
          - img [ref=e31]
          - generic [ref=e33]: Teachers
        - link "Navigate to Receptionists" [ref=e34] [cursor=pointer]:
          - /url: /admin/az-receptionists
          - img [ref=e35]
          - generic [ref=e37]: Receptionists
        - link "Navigate to Finance/Fees" [ref=e38] [cursor=pointer]:
          - /url: /admin/finance
          - img [ref=e39]
          - generic [ref=e41]: Finance/Fees
        - link "Navigate to Announcements" [ref=e42] [cursor=pointer]:
          - /url: /admin/announcements
          - img [ref=e43]
          - generic [ref=e45]: Announcements
      - button "Log out" [ref=e47] [cursor=pointer]:
        - generic [ref=e48]: Log Out
    - generic [ref=e49]:
      - banner [ref=e50]:
        - heading "Welcome, Abbas!" [level=2] [ref=e51]
        - toolbar "Quick actions" [ref=e52]:
          - button "View announcements" [ref=e54] [cursor=pointer]:
            - img [ref=e55]
            - generic [ref=e57]: "2"
          - generic "Logged in as Abbas" [ref=e58]:
            - img [ref=e59]
            - generic [ref=e61]: Abbas
            - button "Log out of account" [ref=e62] [cursor=pointer]:
              - img [ref=e63]
      - main [ref=e65]:
        - main "Admin Dashboard Overview" [ref=e67]:
          - generic [ref=e69]:
            - img [ref=e71]
            - generic [ref=e73]:
              - heading "Dashboard Overview" [level=1] [ref=e74]
              - paragraph [ref=e75]: Monitor your institute's performance at a glance
          - region "Statistics Summary" [ref=e76]:
            - 'status "Active Students: 4" [ref=e77]':
              - generic [ref=e78]:
                - generic [ref=e79]:
                  - paragraph [ref=e80]: Active Students
                  - paragraph [ref=e81]: "4"
                - img [ref=e83]
            - 'status "Total Teachers: 3" [ref=e85]':
              - generic [ref=e86]:
                - generic [ref=e87]:
                  - paragraph [ref=e88]: Total Teachers
                  - paragraph [ref=e89]: "3"
                - img [ref=e91]
            - 'status "Upcoming Announcements: 0" [ref=e95]':
              - generic [ref=e96]:
                - generic [ref=e97]:
                  - paragraph [ref=e98]: Upcoming Announcements
                  - paragraph [ref=e99]: "0"
                - img [ref=e101]
          - region "Quick Actions" [ref=e105]:
            - heading "Quick Actions" [level=3] [ref=e106]
            - group "Administrative Actions" [ref=e107]:
              - button "Add new Teacher" [ref=e108] [cursor=pointer]: ➕ Add Teacher
              - button "Add new Receptionist" [ref=e109] [cursor=pointer]: ➕ Add Receptionist
              - button "Add new User" [ref=e110] [cursor=pointer]: ➕ Add User
              - button "📢 Post Announcement" [ref=e111] [cursor=pointer]
```