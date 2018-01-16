function checkUsersValid(goodUsers) {
  return allUsersValid(submittedUsers);
  function allUsersValid(submittedUsers) {
		return submittedUsers.every((subUser) =>
			goodUsers.some((goodUser) => (goodUser.id === subUser.id)
	));
}
}
module.exports = checkUsersValid;

//base case
let goodUsers = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
		];
let submittedUsers = [
      { id: 2 },
      { id: 3 },
      { id: 1 }
    ];
console.log('Test for base case: ', checkUsersValid(goodUsers) === true);

//empty case
goodUsers = [];
submittedUsers = [];
console.log('Test for empty id case: ', checkUsersValid(goodUsers) === true);

//no match case
goodUsers = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
		];
	submittedUsers = [
      { id: 2 },
      { id: 3 },
      { id: 4 }
    ];
console.log('Test for false case: ', checkUsersValid(goodUsers) === false);
