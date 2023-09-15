import images from "./images";

export const menuItems = ["home", "about", "contact"];

export const expertiseTechImages = [images.flutter, images.redux, images.sass];

export const dummyMap = {
  train:
    "https://res.cloudinary.com/dqgo7mp9y/image/upload/v1694768315/images/trains/train6-removebg-preview_egdxzh.png",
  bird: "https://res.cloudinary.com/dqgo7mp9y/image/upload/v1694761212/images/birds/birds5-removebg-preview_mt30ae.png",
  hill: "https://res.cloudinary.com/dqgo7mp9y/image/upload/v1694761152/images/mountains/hills_night-removebg-preview_uwsxht.png",
  pole: "https://res.cloudinary.com/dqgo7mp9y/image/upload/v1694761111/images/poles/pole2_z7mgli.png",
  ball: "https://res.cloudinary.com/dqgo7mp9y/image/upload/v1694778143/images/ball/ball_auph8q.png",
};

export const dummyAbouts = [
  {
    _createdAt: "2023-09-05T09:04:02Z",
    _rev: "F1KM8zhJ2QLQcEdFqqAyz4",
    _type: "abouts",
    description: "I am a good web designer",
    _id: "089de192-6f87-4c2f-8ac9-4fb46bcb1da6",
    title: "Web Design",
    _updatedAt: "2023-09-05T09:04:02Z",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-b62651ef34a9e54c354ee437545acc348fbf0505-1200x900-png",
        _type: "reference",
      },
    },
  },
  {
    _updatedAt: "2023-09-05T09:05:08Z",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-90d71de50f2c6659156500e7a4d76a618e1fcd63-1200x900-png",
        _type: "reference",
      },
    },
    _createdAt: "2023-09-05T09:05:08Z",
    _rev: "F1KM8zhJ2QLQcEdFqqB1ou",
    _type: "abouts",
    description: "I am a good web developer",
    _id: "5a8ffe3a-6d1c-40cf-8570-96763ff33067",
    title: "Web Animations",
  },
  {
    _rev: "tE3DALPtk9kxzzcoF6fsWL",
    _type: "abouts",
    description: "I am a good web developer",
    _id: "7b76bcd3-6d6b-4e20-9805-8cbae3db8a70",
    title: "Web Development",
    _updatedAt: "2023-09-05T08:47:05Z",
    imgUrl: {
      _type: "image",
      asset: {
        _ref: "image-db53adca404b7410a2869db815e4ce77da2e7e53-1200x900-png",
        _type: "reference",
      },
    },
    _createdAt: "2023-09-05T08:47:05Z",
  },
  {
    _rev: "tE3DALPtk9kxzzcoF6g8pO",
    _type: "abouts",
    description: "I am a good web developer",
    _id: "d1593e8f-93df-4ea9-9feb-4187f585756a",
    title: "UI/UX",
    _updatedAt: "2023-09-05T09:04:33Z",
    imgUrl: {
      asset: {
        _ref: "image-65ed72deac647aa84f75c5af8f6284ab926931b0-1200x900-png",
        _type: "reference",
      },
      _type: "image",
    },
    _createdAt: "2023-09-05T09:04:33Z",
  },
];
