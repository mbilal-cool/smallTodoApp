var data = new FormData();
data.append("this is key like parameter name",value )


static createProfile(
    data = undefined,
    profilePicture = undefined,
    govtIDBack = undefined,
    govtIDFront = undefined
  ) {
    return new Promise((resolve, reject) => {
      if (!(data || profilePicture || govtIDBack || govtIDFront)) {
        reject(`Invalid profile data`);
      }
      const formData = new FormData();
      if (data) formData.append("data", JSON.stringify(data));
      if (profilePicture)
        formData.append("picture", {
          uri: profilePicture,
          type: "image/jpeg",
          name: `profile-${Math.random()  Math.random()  10000000000000}.jpg`,
        });

      axios({
        url: `/renter/auth/setup-profile`,
        data: formData,
        headers: {
          "content-type": "multipart/form-data",
        },
        method: "POST",
      })
        .then((res) => {
          if (res.data.success) {
            AuthController.persistSetUpProfiileData(
              res.data.data,
              res.data.data.bearerToken
            );
            resolve(true);
          } else {
            reject(res.data.error.message);
          }
        })
        .catch((err) => {
          console.log(err, `CATCH error in setup profile`);
          reject(ERRORS.INTERNET_CONNECTIVITY);
        });
    });
  }