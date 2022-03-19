export const COLUMNS = {
    accounts: [
      {
        key: "fullName",
        label: "Họ tên",
      },
      {
        key: "email",
        label: "Email",
      },
      {
        key: "address",
        label: "Địa chỉ",
      },
      {
        key: "gender",
        label: "Giới tính",
        formatter: (value) => {
          let gender = "";
          if (value) {
            gender = "Nữ";
          } else {
            gender = "Nam";
          }
          return gender;
        },
      },
      {
        key: "createdAt",
        label: "Ngày đăng ký",
        formatter: (value) => {
          return value.substring(0,10)+" "+value.substring(11,19);
        },
      },
      
      {
        key: "roleId",
        label: "Vai trò",
        formatter: (value) => {
          let role = "";
          if (value == 1) {
            role = "Quản trị viên";
          } else {
              role = "Người dùng";
          }
          return role;
        },
      },
    ],
    books: [
      {
        key: "bookName",
        label: "Tên sách",
      },
      {
        key: "cateName",
        label: "Tên thể loại",
      },
      {
        key: "description",
        label: "Mô tả",
      },
      {
        key: "authorName",
        label: "Tên tác giả",
      },
      {
        key: "numberView",
        label: "Số lượng xem",
      },
      {
        key: "numberLike",
        label: "Số lượng thích",
      },
      {
        key: "createdAt",
        label: "Thời gian tạo",
        formatter: (value) => {
          return value.substring(0,10)+" "+value.substring(11,19);
        },
      },
    ],

    posts: [
      {
        key: "title",
        label: "Tiêu đề",
      },
      {
        key: "content",
        label: "Nội dung",
      },
      {
        key: "createdAt",
        label: "Thời gian tạo",
        formatter: (value) => {
          return value.substring(0,10)+" "+value.substring(11,19);
        },
      },
      
    ],
    props: [
      {
        key: "bookNameProp",
        label: "Tên sách",
      },
      {
        key: "authorName",
        label: "Tên tác giả",
      },
      {
        key: "remark",
        label: "Nhận xét",
      },
      {
        key: "fullNameProp",
        label: "Người đề xuất",
      },
      {
        key: "createdAt",
        label: "Thời gian tạo",
        formatter: (value) => {
          return value.substring(0,10)+" "+value.substring(11,19);
        },
      },
      
    ],
  };
  