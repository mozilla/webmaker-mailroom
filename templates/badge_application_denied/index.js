module.exports = {
  name: 'Badge Application Denied',
  description: 'This email is sent when a user\'s application is denied by a reviewer.',
  tests: [
    {
      description: 'A hive community badge application was denied.',
      data: {
        badgeName: 'Hive Community Member',
        badgeUrl: 'https://webmaker.org/badges/hive-community-member',
        comment: 'You need more work'
      }
    }
  ]
};
