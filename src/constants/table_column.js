export const COLUMNS = {
    accounts: [
      {
        key: "userId",
        label: "Id",
      },
      {
        key: "fullName",
        label: "Full name",
      },
      {
        key: "email",
        label: "Email",
      },
      {
        key: "roleId",
        label: "Role",
        formatter: (value) => {
          let role = "";
          if (value == 1) {
            role = "Admin";
          } else {
              role = "User";
            
          }
          return role;
        },
      },
    ],
    
  
  };
  