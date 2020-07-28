export const menu_items = [
  {
    icon_class_name: "fa fa-home",
    link_to: "/",
  },
  {
    icon_class_name: "fas fa-box-open",
    link_to: "/packages",
  },
  {
    icon_class_name: "fas fa-users",
    link_to: "/users",
  },
  {
    icon_class_name: "fas fa-building",
    link_to: "/hubs",
  },
  {
    icon_class_name: "fas fa-credit-card",
    link_to: "/payment",
  },
  {
    icon_class_name: "fas fa-power-off",
    link_to: "/logout",
  },
];

export const addUserFeilds = {
  first_name: {
    half: true,
    placeholder: "First Name",
    label: "First Name",
    type: "text",
    name:"firstName"
  },
  last_name: {
    half: true,
    placeholder: "Last Name",
    label: "Last Name",
    type: "text",
    name:"secondName"
  },
  email:{
    placeholder: "you@example.com",
    label: "Email Address",
    type: "email",
    name:"email"
  },
phone:{
    placeholder: "256 782 000 000",
    label: "Phone Number",
    type: "tel",
    name:"phone"
  },
company_name:{
    placeholder: "Company.Inc",
    label: "Company Name",
    type: "text",
    optional:true,
    name:"companyName"
},
company_domain:{
    placeholder: "example.domain",
    label: "Company Domain",
    type: "link",
    optional:true,
    name:"companyDomain"
}
};
