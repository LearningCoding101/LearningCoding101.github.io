// Question data for ReadAndChooseAnswerWithImageModal
// Image URLs are placeholders - update with actual images later

export const readAndChooseWithImageQuestions = {
  // Question 24: Đắk Lắk
  24: {
    id: 24,
    title: "Đắk Lắk (Phú Yên)",
    prompt: "Xem các hình ảnh về tỉnh thành và nêu cảm nghĩ",
    question:
      "Đâu là các tính từ mô tả về cảnh quan ở Phú Yên (Tỉnh Đắk Lắk mới)?",
    image: "placeholder-24-phuyenlandscape.jpg", // TODO: Replace with actual image
    choices: [
      "Chật hẹp, oi ả",
      "Hối hả, sầm uất",
      "Hùng vĩ, bạt ngàn",
      "Cổ kính, tấp nập",
    ],
    correctIndex: 2, // "Hùng vĩ, bạt ngàn" ✅
  },

  // Question 25: Khánh Hòa
  25: {
    id: 25,
    title: "Khánh Hòa (Ninh Thuận)",
    prompt: "Xem hình ảnh và trả lời",
    question: "Đây là loại trái cây gì?",
    image: "placeholder-25-nhogreen.jpg", // TODO: Replace with actual image
    choices: [
      "Bưởi Phúc Trạch (Tỉnh Hà Tĩnh)",
      "Mận Hà Nội",
      "Nho xanh Ninh Thuận (Tỉnh Khánh Hòa mới)",
      "Xoài Cát Chu (Tỉnh Đồng Tháp)",
    ],
    correctIndex: 2, // "Nho xanh Ninh Thuận (Tỉnh Khánh Hòa mới)" ✅
  },

  // Question 28: Tây Ninh
  28: {
    id: 28,
    title: "Tây Ninh",
    prompt: "Xem hình ảnh núi Bà",
    question: "Ở tỉnh Tây Ninh có một ngọn núi không trắng là ngọn núi Bà___?",
    image: "placeholder-28-bađinh.jpg", // TODO: Replace with actual image
    choices: ["Vàng", "Cam", "Đen", "Đỏ"],
    correctIndex: 2, // "Đen" (Núi Bà Đen)
  },

  // Question 29: TP. HCM
  29: {
    id: 29,
    title: "TP. Hồ Chí Minh",
    prompt: "Về tên gọi của Thành phố Hồ Chí Minh",
    question:
      "Sau khi đất nước thống nhất, vì sao Sài Gòn được đổi tên thành Thành phố Hồ Chí Minh?",
    image: "placeholder-29-hcm-city.jpg", // TODO: Replace with actual image
    choices: [
      "Chính sách thay đổi",
      "Tưởng nhớ Bác Hồ – vị lãnh tụ kính yêu của dân tộc Việt Nam",
      "Vì muốn tên thành phố dài hơn và khác biệt hơn",
      "Để dễ phân biệt với các tỉnh khác ở miền Nam",
    ],
    correctIndex: 1, // "Tưởng nhớ Bác Hồ..." ✅
  },
};
