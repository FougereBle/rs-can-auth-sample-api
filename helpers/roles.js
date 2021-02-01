module.exports = {
  roles: {
    anonymous: {
      permissions: ["visit_site"],
    },
    user: {
      extends: ["anonymous"],
      permissions: ["manage_account"],
    },
    modo: {
      permissions: ["manage_forum"],
    },
    admin: {
      extends: ["user", "modo"],
      permissions: ["manage_users"],
    },
  },
};
