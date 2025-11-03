// Question data for WatchVideoAndChooseRightAnswerModal
// Videos imported for proper Vite asset handling
import bacNinhVideo from "../../assets/watch_video_and_choose/langmaytretangtien_1.mp4";
import hueVideo from "../../assets/watch_video_and_choose/nhanhaccungdinhhue_1.mp4";
import giaLaiVideo from "../../assets/watch_video_and_choose/congchiengtaynguyen_1.mp4";

export const watchVideoAndChooseQuestions = {
  // Question 10: Bắc Ninh
  10: {
    id: 10,
    title: "Bắc Ninh (Bắc Giang)",
    prompt: "Xem video và trả lời câu hỏi",
    question:
      "Làng nghề truyền thống nào tại tỉnh Bắc Giang (nay là tỉnh Bắc Ninh mới) được nhắc đến trong video trên?",
    video: bacNinhVideo,
    choices: [
      "Làng nghề mỳ Chũ Thủ Dương",
      "Làng nghề hương ngát Linh Sơn",
      "Làng nghề làm bún Đa Mai",
      "Làng nghề mây tre đan Tăng Tiến",
    ],
    correctIndex: 3, // "Làng nghề mây tre đan Tăng Tiến" ✅
  },

  // Question 20: TP. Huế
  20: {
    id: 20,
    title: "TP. Huế",
    prompt: "Xem video và trả lời câu hỏi",
    question:
      "Đâu là tên gọi của loại hình âm nhạc nổi bật tại Huế mà các bạn vừa xem?",
    video: hueVideo,
    choices: ["Ca trù", "Nhã nhạc cung đình Huế", "Đờn ca tài tử", "Hát Xẩm"],
    correctIndex: 1, // "Nhã nhạc cung đình Huế" ✅
  },

  // Question 23: Gia Lai
  23: {
    id: 23,
    title: "Gia Lai (Gia Lai - Bình Định)",
    prompt: "Xem video và trả lời câu hỏi",
    question:
      "Trong lễ hội trên ở Gia Lai, người dân dùng những loại nhạc cụ nào?",
    video: giaLaiVideo,
    choices: ["Cồng, chiêng", "Sáo", "Đàn nguyệt", "Đàn bầu"],
    correctIndex: 0, // "Cồng, chiêng" ✅
  },
};
