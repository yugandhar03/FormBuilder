import UserModal from "../models/user.js";

function addOrReplace(object, arrIndex, providerData) {

    let index = arrIndex[object.profileId];
  
    if (index === undefined) {
      index = providerData.length;
      arrIndex[object.profileId] = index;
    }
    providerData[index] = object
    return providerData;
  }


export const socialMediaData=async(profile,res)=>{
    console.log("gooooo",profile.emails[0].value,profile)
const currentSocialMediaUser = await UserModal.findOne({ email: profile.emails[0].value })
  if (!currentSocialMediaUser) {
    new UserModal({
      fullname: profile.displayName,
      email: profile.emails[0].value,
      provider: ([{
        isActive: true,
        name: profile.displayName,
        provider: profile.provider,
        profileId: profile.id,
      }]),
      password: null,
    }).save().then((newSocialMediaUser) => {
      console.log("new User1 created:" + newSocialMediaUser)
    })
  } else {

    console.log("User1 alerady exsit")

    let providerData = [], arrIndex = {};
    currentSocialMediaUser.provider.map(({ isActive, name, provider, profileId }) =>
      providerData = addOrReplace({
        isActive,
        name,
        provider,
        profileId,
      }, arrIndex, providerData)
    );
    providerData = addOrReplace({
      isActive: true,
      name: profile.displayName,
      provider: profile.provider,
      profileId: profile.id,
    }, arrIndex, providerData);

    const updatedData = await UserModal.findByIdAndUpdate(currentSocialMediaUser._id, { provider: providerData }, { new: true })
    console.log("updatedData: ", updatedData)
    return updatedData;
  }
}