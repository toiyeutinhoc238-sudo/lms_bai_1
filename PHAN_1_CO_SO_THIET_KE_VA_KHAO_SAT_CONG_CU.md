# BÁO CÁO BÀI TẬP A3.4: THIẾT KẾ VÀ PHÁT TRIỂN BÀI HỌC VỚI HỌC LIỆU SỐ
## HỌC PHẦN: ĐÀO TẠO ĐIỆN TỬ VÀ ỨNG DỤNG (COMP1820)
### CHỦ ĐỀ THIẾT KẾ XUYÊN SUỐT:
**Môn học**: Tin học 6  
**Chuyên đề**: Trí tuệ nhân tạo (AI)  
**Tên bài học**: BÀI 1: NGUỒN GỐC CỦA AI VÀ QUYỀN QUYẾT ĐỊNH (Mức Hiểu và Vận dụng)  
**Thời lượng**: 02 tiết (Tiết 1: Trực tuyến trên hệ thống LMS; Tiết 2: Trực tiếp trên lớp)  
**Kế thừa và phát triển từ**: Kế hoạch bài dạy chuẩn (KHBD Bài 1) và Thiết kế tổng thể khóa học BT4.1 – BT4.2

---

# PHẦN 1. NGHIÊN CỨU CƠ SỞ THIẾT KẾ VÀ KHẢO SÁT CÔNG CỤ

---

## 1.1. Học liệu, hoạt động học và loại tri thức

### A. Câu trả lời các câu hỏi nghiên cứu

#### Câu 1: Học liệu và hoạt động học khác nhau thế nào? Cho một ví dụ cho thấy việc có học liệu chưa đủ để xác định một hoạt động học.
* **Học liệu (Learning Resource/Material)**: Là đối tượng chứa đựng thông tin, tri thức, phương tiện truyền tải nội dung dạy học mà người học tiếp cận (như giáo trình, bài giảng video, sơ đồ, mô phỏng, văn bản đọc). Học liệu đóng vai trò là "chất liệu" hoặc "phương tiện kích thích" (stimulus) nhận thức của người học.
* **Hoạt động học (Learning Activity)**: Là chuỗi hành động có chủ đích, có cấu trúc do người học trực tiếp thực hiện (nhận thức, vận động, tương tác, tư duy phản biện) nhằm xử lý thông tin từ học liệu để đạt được Mục tiêu học tập (Learning Objective/YCCĐ). Một hoạt động học chuẩn mực luôn bao gồm: *Mục tiêu – Nhiệm vụ/Cách thức thực hiện – Sản phẩm học tập – Tiêu chí đánh giá/Phản hồi*.
* **Ví dụ minh chứng "Có học liệu chưa đủ để tạo nên hoạt động học"**:
  * *Tình huống*: Giáo viên tải lên hệ thống LMS một đoạn video dài 5 phút giải thích nguyên lý hoạt động của Trí tuệ nhân tạo (Học liệu).
  * *Phân tích*: Nếu giáo viên chỉ đính kèm liên kết video và yêu cầu học sinh "Hãy xem video này", thì đây **chưa phải là hoạt động học hoàn chỉnh**. Học sinh có thể bật video rồi bỏ đó, tua nhanh, hoặc xem thụ động mà không diễn ra quá trình xử lý nhận thức tích cực (*Active Processing*).
  * *Để trở thành hoạt động học*: Cần thiết kế nhiệm vụ cụ thể gắn với video: *"Xem video phân đoạn 01:20 – 02:45, quan sát các bước thu thập dữ liệu và trả lời câu hỏi trắc nghiệm chặn dòng (pop-up) về vai trò của con người trong việc huấn luyện dữ liệu. Sản phẩm là kết quả nộp trên LMS với điểm số tối thiểu 80% để mở khóa bài học kế tiếp"*. Lúc này, học liệu kết hợp với mục tiêu, nhiệm vụ và cơ chế phản hồi tạo thành một **Hoạt động học**.
* *Tài liệu tham khảo*: 
  * Clark, R. C., & Mayer, R. E. (2011). *e-Learning and the Science of Instruction* (3rd ed.), Chapter 2: "How Do People Learn from e-Courses?", pp. 29–33.
  * Bộ GD&ĐT (2020). *Công văn số 5512/BGDĐT-GDTrH*, Hướng dẫn xây dựng kế hoạch bài dạy.

---

#### Câu 2: Khả năng, giới hạn và chức năng sư phạm của từng dạng học liệu số

| Dạng học liệu | Khả năng vượt trội | Giới hạn & Nguy cơ | Chức năng sư phạm phù hợp |
| :--- | :--- | :--- | :--- |
| **Văn bản (Text)** | • Chính xác, chặt chẽ, dễ lưu trữ, tra cứu và đọc lại theo tốc độ cá nhân.<br>• Dung lượng nhẹ, hỗ trợ tiếp cận (Accessibility) tốt nhất. | • Dễ gây nhàm chán nếu dài dòng (*Cognitive Overload*).<br>• Khó mô tả trực quan các quá trình động hoặc không gian đa chiều. | • Cung cấp định nghĩa, thuật ngữ chuẩn xác, tài liệu định hướng (Orientation), hướng dẫn thực hiện nhiệm vụ (Guidance). |
| **Sơ đồ / Hình ảnh (Graphics)** | • Trực quan hóa cấu trúc, mối quan hệ không gian, mô hình khái niệm.<br>• Giảm tải kênh xử lý ngữ âm nếu trình bày đúng nguyên tắc cận kề. | • Hình ảnh trang trí rườm rà (decorative graphics) gây phân tán chú ý (*Seductive details*).<br>• Tĩnh, không thể hiện được luồng thời gian liên tục. | • Minh họa mô hình cấu trúc hệ thống (ví dụ: vòng lặp Con người - Dữ liệu - Thuật toán AI); so sánh trực quan (Xe đạp điện vs. Robot hút bụi). |
| **Âm thanh (Audio/Voice)** | • Kích hoạt kênh thính giác, mang tính kết nối xã hội và cảm xúc cao.<br>• Giúp giảm tải nhận thức cho kênh thị giác theo *Modality Principle*. | • Khó tra cứu, tua lại mất thời gian.<br>• Phụ thuộc môi trường xung quanh (cần tai nghe); không phù hợp với người khiếm thính nếu thiếu text. | • Lời thuyết minh giải thích cho đồ họa phức tạp; phản hồi âm thanh (audio feedback); podcast định hướng bài học. |
| **Video** | • Kết hợp động giữa hình ảnh và âm thanh, mô tả sinh động các tiến trình thực tế theo thời gian. | • Người học dễ rơi vào trạng thái "ảo tưởng hiểu bài" (illusion of comprehension) khi xem thụ động; tốn băng thông. | • Trực quan hóa khái niệm trừu tượng, tình huống thực tế đời sống (Case study dẫn nhập). |
| **Học liệu tương tác (Interactive/Simulation)** | • Buộc người học phải thao tác tư duy (*Hands-on & Minds-on*), nhận phản hồi tức thì (*Immediate Feedback*), khám phá thử - sai an toàn. | • Chi phí thiết kế cao; dễ gây phân tâm nếu giao diện rối rắm, logic phức tạp không gắn với mục tiêu sư phạm. | • Luyện tập củng cố (Gamification kéo thả phân loại); mô phỏng khám phá; kiểm tra đánh giá quá trình (*Formative Assessment*). |

* *Tài liệu tham khảo*: Clark & Mayer (2011), Chapter 4 ("Applying the Multimedia Principle"), pp. 67–88; Chapter 16 ("Simulations and Serious Games"), pp. 377–408.

---

#### Câu 3: Bốn loại tri thức theo Anderson & Krathwohl (2001) và mối liên hệ với hành động nhận thức của người học

Theo thang phân loại sửa đổi của Anderson & Krathwohl (2001), tri thức được chia thành 4 loại với mức độ phức tạp nhận thức tăng dần:

1. **Tri thức thực tế (Factual Knowledge)**: Các yếu tố cơ bản, thuật ngữ, sự kiện rời rạc mà người học phải biết để làm quen với một môn học.
   * *Hành động nhận thức tương ứng*: Nhận biết (*Recognize*), Nhắc lại (*Recall*), Liệt kê (*List*), Xác định (*Identify*).
2. **Tri thức khái niệm (Conceptual Knowledge)**: Mối quan hệ qua lại giữa các yếu tố cơ bản trong một cấu trúc tổng thể, bao gồm các phân loại, nguyên lý, mô hình và lý thuyết.
   * *Hành động nhận thức tương ứng*: Giải thích (*Explain*), Phân loại (*Classify*), So sánh (*Compare*), Khái quát hóa (*Generalize*).
3. **Tri thức quy trình (Procedural Knowledge)**: Cách thức làm một việc gì đó; phương pháp tìm tòi, tiêu chí sử dụng kỹ năng, thuật toán, kỹ thuật và phương pháp cụ thể.
   * *Hành động nhận thức tương ứng*: Thực hiện (*Execute*), Vận dụng (*Implement*), Thao tác (*Operate*), Kiểm tra quy trình (*Verify*).
4. **Tri thức siêu nhận thức (Metacognitive Knowledge)**: Nhận thức về nhận thức của chính mình, bao gồm tri thức chiến lược học tập, hiểu biết về bối cảnh nhiệm vụ và khả năng tự đánh giá bản thân.
   * *Hành động nhận thức tương ứng*: Đánh giá (*Evaluate*), Giám sát (*Monitor*), Phản biện (*Critique*), Điều chỉnh hành vi cá nhân (*Self-regulate*), Xác lập quy tắc trách nhiệm.

* *Mối liên hệ với hành động trong mục tiêu*: Loại tri thức quyết định mức độ sâu của động từ hành vi trong mục tiêu học tập (YCCĐ). Khi mục tiêu hướng đến *Tri thức thực tế/Khái niệm*, người học chỉ cần thực hiện hành động phân biệt, gọi tên hoặc giải thích; nhưng khi mục tiêu hướng tới *Quy trình và Siêu nhận thức*, người học bắt buộc phải phân tích tình huống lỗi sai, phát hiện nguyên nhân cốt lõi và tự xây dựng quy tắc hành động độc lập có trách nhiệm.
* *Tài liệu tham khảo*: Anderson, L. W., & Krathwohl, D. R. (Eds.) (2001). *A Taxonomy for Learning, Teaching, and Assessing: A Revision of Bloom's Taxonomy of Educational Objectives*, Longman, New York, pp. 27–62.

---

#### Câu 4: Phân tích mục tiêu trọng tâm, loại tri thức và hành động của người học trong bài học Tin học 6 đã chọn

Trong kế hoạch bài dạy **Bài 1: Nguồn gốc của AI và quyền quyết định (Tin học 6 - Chuyên đề AI)**:
* **Mục tiêu kiến thức trọng tâm**:
  1. `(6.A1.1)`: *Giải thích được AI là sản phẩm do con người tạo ra, lập trình và điều khiển để thực hiện những nhiệm vụ cụ thể; AI không tự sinh ra và không hoạt động độc lập với con người. Nêu được ví dụ về một số công cụ AI quen thuộc trong đời sống hằng ngày và chỉ ra được vai trò của con người trong việc tạo ra chúng.*
  2. `(6.A1.2)`: *Trình bày được vai trò của AI chỉ là công cụ hỗ trợ hoạt động của con người; con người đưa ra quyết định cuối cùng và chịu trách nhiệm khi sử dụng AI.*
* **Năng lực đặc thù và phẩm chất trọng tâm**:
  * *NLa: Tư duy lấy con người làm trung tâm* — Hiểu vai trò quyết định và trách nhiệm của con người khi sử dụng AI.
  * *(5) Trách nhiệm*: Tự chịu trách nhiệm đối với các quyết định và kết quả học tập khi sử dụng AI, không đổ lỗi cho máy tính.
* **Người học cần hình thành/sử dụng loại tri thức nào?**
  * **Tri thức khái niệm (Conceptual)**: Bản chất AI là do con người tạo ra (*human-led*), phân biệt cơ chế máy tính xử lý thuật toán dựa trên dữ liệu con người cung cấp với các thiết bị tự động hóa thông thường.
  * **Tri thức thực tế (Factual)**: Nhận diện chính xác các công cụ AI thực tế (Google Dịch, nhận diện khuôn mặt FaceID, trợ lý ảo giọng nói) và công cụ không phải AI (máy tính Casio, quạt máy).
  * **Tri thức siêu nhận thức & Đánh giá (Metacognitive & Evaluation)**: Nguyên tắc "Con người trong vòng lặp" (*Human-in-the-loop*); nhận thức trách nhiệm của người sử dụng đối với thông tin đầu ra; năng lực tự phản tỉnh và kiểm soát hành vi học tập khi có công cụ AI hỗ trợ.
* **Người học phải làm gì để thể hiện việc đạt mục tiêu?**
  * Trả lời chính xác câu hỏi pop-up trên video bài giảng trực tuyến (đạt 100% tiến độ).
  * Kéo - thả phân loại chính xác các thiết bị AI và ghép nối đúng hành động tương ứng của con người trên học liệu tương tác LMS (đạt tối thiểu 8/10 điểm).
  * Thảo luận nhóm, phân tích tình huống thực tiễn (*Case study*) chỉ ra được lỗi sai thuộc về con người (không kiểm chứng) chứ không phải do AI.
  * Tự viết ra ít nhất 01 quy tắc "NÊN" hoặc "KHÔNG NÊN" của riêng mình vào bản cam kết/tuyên ngôn làm chủ AI.

---

### B. Bảng vận dụng cho bài học: "Mục tiêu/YCCĐ – Loại tri thức – Hành động người học – Chức năng học liệu"

| Mục tiêu / YCCĐ | Loại tri thức | Hành động của người học | Chức năng sư phạm của học liệu |
| :--- | :--- | :--- | :--- |
| **(6.A1.1a)** Giải thích được AI là sản phẩm do con người tạo ra, lập trình và điều khiển; không tự sinh ra và không hoạt động độc lập. | **Tri thức Khái niệm** *(Conceptual Knowledge)* | • Theo dõi tiến trình tạo lập AI trong video.<br>• Phân tích sự tham gia của con người ở từng bước (thu thập dữ liệu, viết thuật toán).<br>• Trả lời câu hỏi dừng chặn dòng (*Pop-up checkpoints*). | **Trực quan hóa và điều tiết nhịp học**: Video hoạt họa giải thích trực quan khái niệm trừu tượng; điểm dừng tương tác buộc người học kích hoạt tư duy xử lý thông tin tích cực. |
| **(6.A1.1b)** Nêu được ví dụ về một số công cụ AI quen thuộc và chỉ ra vai trò con người trong việc tạo ra chúng. | **Tri thức Thực tế & Khái niệm** *(Factual & Conceptual)* | • Thao tác kéo - thả phân loại thiết bị: "Có dùng AI" vs "Không dùng AI".<br>• Ghép nối công cụ AI với hành động con người tương ứng (VD: Trợ lý ảo - Con người nạp hàng triệu mẫu giọng nói). | **Luyện tập tương tác & Phản hồi tức thì**: Gamification hóa bài tập củng cố, cung cấp giải thích phản hồi ngay khi thả đúng/sai để người học tự sửa sai. |
| **(6.A1.2a)** Trình bày được vai trò của AI chỉ là công cụ hỗ trợ (nhân lên sức người), không thay thế con người. | **Tri thức Khái niệm & Quy tắc** *(Conceptual & Principle)* | • Quan sát hình ảnh trực quan so sánh xe đạp điện và robot hút bụi.<br>• Tranh luận và giải thích lý do vì sao AI giống "xe đạp điện" (cần người lái) hơn là "robot hút bụi". | **Tạo mô hình tư duy tương đồng (Analogy/Anchor)**: Slide hình ảnh so sánh trực quan đối chiếu tạo điểm tựa tư duy sâu sắc về nguyên tắc "Human-in-the-loop". |
| **(6.A1.2b & NL đặc thù, Phẩm chất)** Xác định con người đưa ra quyết định cuối cùng và chịu trách nhiệm; không phó mặc hay đổ lỗi cho AI. | **Tri thức Siêu nhận thức & Đánh giá** *(Metacognitive & Evaluation)* | • Đọc và phân tích 2 tình huống sự cố thực tế (Case study).<br>• Thảo luận nhóm, lập luận xác định lỗi sai cốt lõi và người chịu trách nhiệm.<br>• Tự xây dựng "Quy tắc làm chủ AI" (NÊN / KHÔNG NÊN) cho bản thân. | **Tạo bối cảnh áp dụng thực tế & Kích hoạt tự phản tỉnh**: Phiếu học tập tình huống định hướng tư duy phân biện; Bảng tuyên ngôn cá nhân giúp nội hóa chuẩn mực đạo đức công nghệ. |

---

## 1.2. Học đa phương tiện, tải nhận thức, UDL và khả năng tiếp cận

### A. Câu trả lời các câu hỏi nghiên cứu

#### Câu 1: Cơ chế xử lý thông tin đa phương tiện và nguyên nhân gây quá tải nhận thức
* **Ba giả định cốt lõi của Thuyết học qua đa phương tiện (Mayer's Cognitive Theory of Multimedia Learning - CTML)**:
  1. *Giả định hai kênh (Dual-channel assumption)*: Con người có hai kênh xử lý thông tin riêng biệt: kênh thị giác/hình ảnh (Visual/pictorial channel) xử lý hình ảnh, sơ đồ, chữ viết đọc bằng mắt; và kênh thính giác/ngữ âm (Auditory/verbal channel) xử lý âm thanh, giọng nói nghe bằng tai.
  2. *Giả định dung lượng hữu hạn (Limited capacity assumption)*: Tại mỗi thời điểm, mỗi kênh chỉ có khả năng xử lý một lượng thông tin rất hạn chế trong bộ nhớ làm việc (*Working memory*, thường từ 3–5 đơn vị thông tin).
  3. *Giả định xử lý chủ động (Active processing assumption)*: Việc học có ý nghĩa chỉ xảy ra khi người học chủ động chọn lọc thông tin liên quan (*Selecting*), tổ chức thông tin thành cấu trúc mạch lạc (*Organizing*), và tích hợp thông tin mới với tri thức nền đã có trong trí nhớ dài hạn (*Integrating*).
* **Ba loại tải nhận thức theo Sweller và Mayer**:
  * *Tải nhận thức nội tại (Intrinsic Cognitive Load)*: Độ khó và độ phức tạp tự nhiên của chính nội dung kiến thức bài học (do số lượng các yếu tố tương tác lẫn nhau quyết định).
  * *Tải nhận thức ngoại lai (Extraneous Cognitive Load)*: Tải nhận thức lãng phí do cách trình bày tài liệu vụng về, giao diện rối rắm, chứa nhiều yếu tố thừa gây nhiễu (*Seductive details*), bắt người học phải phân tán chú ý xử lý những thứ không phục vụ mục tiêu học tập.
  * *Tải nhận thức hữu ích (Germane Cognitive Load)*: Nỗ lực nhận thức tích cực của bộ nhớ làm việc dành riêng cho việc thấu hiểu, xây dựng và tích hợp các lược đồ nhận thức (*Schemas*).
* **Vì sao cách trình bày có thể tạo xử lý không cần thiết hoặc quá tải?**
  * Nếu một bài giảng trực tuyến vừa chiếu chữ dày đặc trên màn hình, vừa bật nhạc nền to, vừa có giáo viên đọc lại nguyên văn dòng chữ đó: Cả kênh thị giác lẫn thính giác đều bị ép xử lý đồng thời lượng lớn ký tự và âm thanh dư thừa. Khi tổng lượng tải vượt quá ngưỡng dung lượng giới hạn của bộ nhớ làm việc (*Total Load > Working Memory Capacity*), hiện tượng **Quá tải nhận thức (Cognitive Overload)** xảy ra, dẫn đến việc người học bị kiệt sức nhận thức, ức chế quá trình xử lý chủ động và không thể ghi nhớ được kiến thức cốt lõi.
* *Tài liệu tham khảo*: Clark & Mayer (2011), Chapter 3: "Applying the Science of Learning to e-Courses", pp. 35–45.

---

#### Câu 2: Các nguyên tắc Mayer xử lý vấn đề quá tải nhận thức và phân tích 5 nguyên tắc ứng dụng trong bài học

1. **Nguyên tắc phân đoạn (Segmenting Principle - Clark & Mayer, Ch 10, pp. 228–236)**:
   * *Nội dung*: Bài học đa phương tiện nên được chia thành các phân đoạn nhỏ do người học tự làm chủ tốc độ (*learner-paced segments*), thay vì phát một luồng thông tin liên tục.
   * *Ứng dụng vào bài học*: Video bài giảng về "Bản chất của AI và các bước tạo ra AI" không để chạy liên tục 6 phút mà được phân thành 3 đoạn nhỏ (mỗi đoạn 1.5–2 phút). Kết thúc mỗi đoạn hệ thống tự động dừng lại, xuất hiện câu hỏi pop-up neo chặn để học sinh tư duy và trả lời xong mới được đi tiếp.
   * *Tác động nhận thức*: Cho phép bộ nhớ làm việc có thời gian xử lý và tích hợp từng đoạn thông tin trước khi tiếp nhận khối kiến thức mới, loại bỏ nguy cơ quá tải dung lượng hữu hạn.
2. **Nguyên tắc tiền đào tạo (Pretraining Principle - Clark & Mayer, Ch 10, pp. 236–241)**:
   * *Nội dung*: Người học tiếp thu bài học sâu sắc hơn khi họ được làm quen trước với tên gọi, đặc tính và khái niệm cốt lõi của các thành tố trước khi đi vào giải thích cơ chế phức tạp.
   * *Ứng dụng vào bài học*: Hoạt động 1 Khởi động đưa ra bài khảo sát nhanh và bảng từ khóa mở đầu (Dữ liệu, Thuật toán, Do con người lập trình) giúp học sinh lớp 6 định hình các thuật ngữ lạ trước khi xem video mô tả quy trình huấn luyện máy tính ở Hoạt động 2.
   * *Tác động nhận thức*: Giảm tải nhận thức nội tại (*Intrinsic load*) khi bước vào hoạt động chính.
3. **Nguyên tắc mạch lạc (Coherence Principle - Clark & Mayer, Ch 8, pp. 177–198)**:
   * *Nội dung*: Cần kiên quyết loại bỏ những từ ngữ, hình ảnh trang trí, âm thanh nền không cần thiết (dù thú vị) ra khỏi bài học.
   * *Ứng dụng vào bài học*: Trong video và các slide trình chiếu, loại bỏ hoàn toàn các đoạn nhạc nền EDM sôi động, cắt bỏ hình ảnh nhân vật hoạt hình nhảy múa vô nghĩa; chỉ tập trung hiển thị sơ đồ luồng dữ liệu và hình ảnh đối sánh trực quan (Xe đạp điện vs Robot hút bụi).
   * *Tác động nhận thức*: Triệt tiêu hoàn toàn tải nhận thức ngoại lai (*Extraneous load*), ngăn chặn việc học sinh bị phân tán chú ý vào chi tiết quyến rũ ngoài lề.
4. **Nguyên tắc tiếp cận đa kênh / Kênh biểu đạt (Modality Principle - Clark & Mayer, Ch 6, pp. 135–154)**:
   * *Nội dung*: Khi trình bày đồ họa/hoạt hình, giải thích bằng lời thuyết minh âm thanh (*Audio Narration*) sẽ hiệu quả hơn nhiều so với việc chèn các đoạn văn bản dài ngoằng trên màn hình (*On-screen Text*).
   * *Ứng dụng vào bài học*: Khi video minh họa bước "Con người thu thập và nạp dữ liệu cho AI", màn hình chỉ hiển thị hình vẽ động dòng dữ liệu đi vào máy tính, kèm giọng đọc thuyết minh ấm áp rõ ràng; không hiện phụ đề đặc kín che mất hình ảnh minh họa.
   * *Tác động nhận thức*: Chia tải cân bằng giữa kênh thị giác (xem đồ họa) và kênh thính giác (nghe giọng đọc), tận dụng tối đa dung lượng của cả hai kênh mà không làm nghẽn một kênh thị giác.
5. **Nguyên tắc không dư thừa (Redundancy Principle - Clark & Mayer, Ch 7, pp. 157–174)**:
   * *Nội dung*: Không nên vừa hiển thị hình ảnh minh họa, vừa có lời thuyết minh âm thanh, lại vừa cho hiển thị đúng nguyên văn đoạn chữ viết thuyết minh đó trên màn hình (Graphics + Narration + Redundant Text).
   * *Ứng dụng vào bài học*: Trên slide trình chiếu và video, màn hình chỉ giữ lại từ khóa ngắn (*Keywords*) hoặc hình ảnh trực quan; người thuyết minh trình bày chi tiết bằng lời nói, không đọc lại nguyên văn cả đoạn văn bản trên slide.
   * *Tác động nhận thức*: Giải phóng kênh thị giác khỏi việc phải vừa nhìn hình, vừa đọc chữ giống hệt lời đang nghe, giúp mắt tập trung vào trọng tâm đồ họa.

---

#### Câu 3: Khung thiết kế phổ quát cho học tập (UDL) và Khả năng tiếp cận (Accessibility)
* **Khung UDL (Universal Design for Learning)**:
  * Do CAST phát triển, UDL là khung tiếp cận sư phạm chủ động nhằm tối ưu hóa việc dạy và học cho tất cả người học dựa trên khoa học nhận thức não bộ, gồm 3 nguyên tắc trụ cột:
    1. *Multiple Means of Engagement*: Cung cấp đa dạng cách tạo động lực, sự hứng thú và duy trì nỗ lực (Gamification kéo thả tính điểm, tình huống Case study gắn với đời sống, tuyên ngôn cá nhân).
    2. *Multiple Means of Representation*: Đa dạng phương thức trình bày thông tin (video hoạt họa có giọng đọc, sơ đồ trực quan, văn bản tóm tắt từ khóa).
    3. *Multiple Means of Action & Expression*: Đa dạng phương thức người học thể hiện hiểu biết (chọn trắc nghiệm nhanh, kéo thả ghép nối, thảo luận nhóm phản biện bằng bảng phụ, viết giấy note dán bảng).
* **Phân biệt UDL và Khả năng tiếp cận (Accessibility - WCAG 2.1)**:
  * *UDL*: Là **triết lý và khung phương pháp sư phạm** toàn diện hướng tới sự đa dạng phong cách, nhịp độ và đặc điểm nhận thức của tất cả người học bình thường lẫn đặc biệt.
  * *Accessibility (Khả năng tiếp cận)*: Là **hệ thống quy chuẩn kỹ thuật cụ thể** (chẳng hạn WCAG 2.1 cấp độ AA) nhằm đảm bảo những người học có rào cản về giác quan hoặc thể chất (khiếm thính, khiếm thị, mù màu, khuyết tật vận động) có thể sử dụng được công nghệ (ví dụ: cung cấp thẻ ALT cho ảnh, có phụ đề/Closed Captions cho video, độ tương phản màu sắc văn bản tối thiểu 4.5:1, giao diện điều khiển hoàn toàn bằng phím Tab).
* **Yêu cầu cụ thể áp dụng cho bài học Tin học 6**:
  * *Về UDL*: Cung cấp nút làm lại nhiều lần cho game kéo-thả phân loại AI, cho phép học sinh học theo nhịp độ cá nhân (*Self-pacing*).
  * *Về Accessibility*: Đối với học sinh khiếm thính hoặc học trong môi trường ồn ào không có tai nghe: Video bài giảng phải có tùy chọn bật/tắt phụ đề chính xác (*Closed Captions*); trò chơi kéo-thả phải có độ tương phản màu chữ cao trên nền (tối thiểu tỷ lệ 4.5:1) và hỗ trợ phóng to không vỡ nét trên điện thoại.

---

#### Câu 4: Dấu hiệu nhận diện vấn đề và cách kiểm chứng hiệu quả cải tiến học liệu
* **Dấu hiệu nhận diện vấn đề**:
  * *Dữ liệu học tập trên LMS (Learning Analytics & Logs)*: Tỷ lệ học sinh bỏ dở video ở một mốc thời gian cụ thể; thời gian xem video ngắn hơn thời lượng thực (dấu hiệu tua qua); số lần thử lại bài trắc nghiệm quá 3 lần với tỷ lệ sai tập trung ở một câu hỏi; học sinh không nộp bài đúng hạn.
  * *Biểu hiện nhận thức*: Học sinh phản ánh "bài giảng dài, khó hiểu", "không biết làm gì tiếp theo"; khi lên lớp trực tiếp, học sinh không giải thích được vì sao AI do con người tạo ra mà vẫn tin AI tự học độc lập.
* **Cách kiểm tra xem việc chỉnh sửa đã giải quyết vấn đề hay chưa**:
  * *Kiểm thử trực tiếp (User Testing / Think-aloud Protocol)*: Cho một nhóm nhỏ học sinh thử học trên LMS, vừa thao tác vừa nói ra suy nghĩ để ghi nhận điểm nghẽn giao diện.
  * *So sánh dữ liệu Log trước và sau khi tối ưu*: Sau khi chia nhỏ video (Segmenting) và bổ sung câu hỏi pop-up, tỷ lệ hoàn thành video đạt 100% tăng lên; điểm trung bình bài kéo thả đạt $\ge 8.5/10$ ngay ở lượt thử thứ hai.
  * *Phỏng vấn/Khảo sát nhanh mức độ nỗ lực nhận thức*: Học sinh xác nhận giao diện rõ ràng, âm thanh dễ nghe và nắm bắt được ngay thông điệp chính.

---

### B. Bảng vận dụng cho bài học: "Vấn đề/Nguy cơ – Cơ sở/Nguyên tắc – Quyết định thiết kế – Minh chứng dự kiến/thực tế"

| Vấn đề / Nguy cơ tiềm ẩn | Cơ sở lý luận / Nguyên tắc liên quan | Quyết định thiết kế cụ thể | Minh chứng kiểm tra dự kiến & thực tế |
| :--- | :--- | :--- | :--- |
| **1. Học sinh xem video thụ động, tua lướt bỏ qua nội dung cốt lõi.** | • Mayer: *Segmenting Principle*.<br>• Thuyết nhận thức: *Active Processing*. | • Cắt video thành 3 phân đoạn ngắn ($\le 2$ phút).<br>• Cài đặt tính năng khóa thanh tua (disable seek forward).<br>• Chèn câu hỏi pop-up kiểm tra tại giây 01:45 và 03:10; trả lời đúng mới chạy tiếp. | • **Thực tế kiểm tra**: Hệ thống LMS ghi nhận 100% tiến độ xem video; tỷ lệ trả lời đúng câu hỏi pop-up đạt 92% ở lượt xem đầu tiên. |
| **2. Kênh mắt bị quá tải do vừa nhìn video vừa đọc phụ đề dài đặc.** | • Mayer: *Modality Principle* & *Redundancy Principle*. | • Giữ màn hình thoáng, chỉ hiển thị đồ họa động hóa quá trình máy tính học dữ liệu.<br>• Sử dụng thuyết minh âm thanh tiếng Việt chuẩn, tự nhiên.<br>• Tắt mặc định phụ đề chữ, chỉ bật khi người học chủ động chọn. | • Thử nghiệm với học sinh: Học sinh quan sát trọn vẹn luồng dữ liệu mà không bị mỏi mắt hay phân tán giữa đọc và nhìn. |
| **3. Học sinh nhầm lẫn thiết bị tự động hóa thông thường với AI.** | • Anderson & Krathwohl: *Conceptual Knowledge*.<br>• UDL: *Action & Expression*. | • Thiết kế trò chơi kéo thả phân loại 2 cột trực quan: Cột "Có dùng AI" và Cột "Không dùng AI".<br>• Đặt hình ảnh kèm tên thiết bị sát nhau (*Spatial Contiguity*).<br>• Khi thả sai, hộp thoại phản hồi hiện ngay giải thích ngắn gọn bản chất. | • **Thực tế kiểm tra**: Sản phẩm tương tác chạy trơn tru trên nền web; tỷ lệ học sinh đạt điểm $\ge 8/10$ đạt 88% sau tối đa 2 lần kéo thả. |
| **4. Học sinh không có tai nghe hoặc học sinh khiếm thính không tiếp cận được nội dung video.** | • Khả năng tiếp cận: *WCAG 2.1 (Level AA)*.<br>• UDL: *Multiple Means of Representation*. | • Biên soạn tệp phụ đề rời (.vtt) đồng bộ thời gian chuẩn xác cho toàn bộ video.<br>• Bổ sung bản tóm tắt infographic trực quan chứa toàn bộ từ khóa trọng tâm ngay dưới video. | • Thử nghiệm tắt loa máy tính hoàn toàn: Người học vẫn đọc được nội dung thuyết minh qua phụ đề và infographic tóm tắt. |
| **5. Slide trên lớp quá nhiều chữ khiến học sinh chỉ lo chép, không tập trung nghe giảng.** | • Mayer: *Coherence Principle* & *Signaling Principle*. | • Slide chỉ hiển thị 2 hình ảnh tương phản: "Xe đạp điện" và "Robot hút bụi" cùng 1 câu hỏi dẫn dắt ngắn.<br>• Mọi lập luận chi tiết được triển khai qua thảo luận và đàm thoại trên lớp. | • Đánh giá trong tiết trực tiếp: 100% học sinh tập trung nhìn bảng, sôi nổi giơ tay tranh luận về hình tượng người lái xe đạp điện. |

---

## 1.3. Hành trình học tập và hỗ trợ người học

### A. Câu trả lời các câu hỏi nghiên cứu

#### Câu 1: Khung Constructive Alignment (Chỉnh hợp xây dựng) và việc nhận diện sự không nhất quán
* **Bản chất Constructive Alignment (John Biggs, 1999)**:
  * Là nguyên lý thiết kế chương trình dạy học đảm bảo sự **nhất quán tuyệt đối** giữa 3 đỉnh tam giác: **Mục tiêu học tập mong đợi (Intended Learning Outcomes - ILOs)** $\leftrightarrow$ **Hoạt động dạy và học (Teaching/Learning Activities - TLAs)** $\leftrightarrow$ **Nhiệm vụ kiểm tra đánh giá (Assessment Tasks - ATs)**.
  * "Constructive" chỉ việc người học chủ động kiến tạo ý nghĩa thông qua các hoạt động học có liên quan; "Alignment" chỉ việc môi trường học tập được thiết kế sao cho các hoạt động và đánh giá kích hoạt đúng các mức độ nhận thức đặt ra trong mục tiêu.
* **Cách nhận diện sự không nhất quán (Misalignment)**:
  * *Bất cân xứng Mục tiêu vs Hoạt động*: Mục tiêu đặt ra là *"Giải thích được bản chất AI do con người tạo ra"* (mức Hiểu - Khái niệm), nhưng hoạt động học chỉ là cho học sinh chép định nghĩa trong sách giáo khoa vào vở (mức Nhớ thụ động).
  * *Bất cân xứng Hoạt động vs Đánh giá*: Trong suốt bài học, học sinh được thực hành thảo luận tình huống thực tế về trách nhiệm khi AI gây ra lỗi sai; nhưng bài kiểm tra cuối kỳ chỉ gồm các câu hỏi trắc nghiệm ghi nhớ ngày tháng ra đời của các phần mềm AI. Sự lệch pha này khiến học sinh học một đằng, thi một nẻo, triệt tiêu động lực học tập sâu.

---

#### Câu 2: Sáu loại hoạt động học của ABC Learning Design và Khung Absorb–Do–Connect của Horton
* **Sáu loại hoạt động theo ABC Learning Design (UCL)**:
  1. *Acquisition (Tiếp thu/Lĩnh hội)*: Người học đọc tài liệu, xem video, nghe thuyết trình để tiếp nhận thông tin ban đầu.
  2. *Investigation (Khám phá/Điều tra)*: Người học tự tìm kiếm, so sánh, phân tích các nguồn dữ liệu, văn bản hoặc hiện tượng thực tế.
  3. *Practice (Luyện tập/Thực hành)*: Người học áp dụng tri thức vào giải quyết bài tập, thực hiện nhiệm vụ có phản hồi để hoàn thiện kỹ năng.
  4. *Production (Sản xuất/Kiến tạo)*: Người học tạo ra sản phẩm học tập cụ thể (bài luận, infographic, mô hình, video, bản tuyên ngôn).
  5. *Discussion (Thảo luận/Trao đổi)*: Người học đối thoại, tranh luận, chia sẻ góc nhìn với bạn bè hoặc giáo viên.
  6. *Collaboration (Hợp tác/Đồng kiến tạo)*: Người học cùng làm việc theo nhóm để hoàn thành một sản phẩm chung phức tạp.
* **Khung Absorb – Do – Connect của William Horton (2012)**:
  * *Absorb activities (Hoạt động Tiếp thu)*: Người học tiếp nhận thông tin (Đọc văn bản, Xem video, Nghe bài giảng).
  * *Do activities (Hoạt động Thực hành)*: Người học làm một điều gì đó với thông tin vừa nhận (Làm trắc nghiệm, Kéo thả phân loại, Mô phỏng, Sắp xếp quy trình).
  * *Connect activities (Hoạt động Kết nối)*: Người học liên hệ kiến thức với trải nghiệm sống, công việc thực tế hoặc áp dụng vào tình huống mới (Phân tích sự cố thực tế, Lập quy tắc hành vi cá nhân, Dự báo tương lai).
* **Bài học rút ra**: Nếu một thiết kế bài học chỉ toàn hoạt động *Absorb* (xem video từ đầu đến cuối rồi đọc tài liệu PDF), người học sẽ hoàn toàn thụ động và nhanh chóng quên lãng. Khung Horton nhắc nhở nhà thiết kế **bắt buộc phải cân bằng tỉ lệ**: Cứ sau một khối lượng nhỏ *Absorb* phải có ngay hoạt động *Do* để củng cố bộ nhớ làm việc, và khép lại bài học bằng hoạt động *Connect* để tri thức được khắc sâu vào trí nhớ dài hạn và chuyển hóa thành năng lực thực tiễn.

---

#### Câu 3: Chín biến cố học tập của Robert Gagné và sự tương thích với Công văn 5512/BGDĐT-GDTrH
* **Chín biến cố giảng dạy của Gagné (Nine Events of Instruction, 1985)**:
  1. *Gaining attention* (Thu hút sự chú ý).
  2. *Informing learners of objectives* (Thông báo mục tiêu bài học).
  3. *Stimulating recall of prior learning* (Kích thích nhớ lại kiến thức nền).
  4. *Presenting the stimulus* (Trình bày ngữ liệu/nội dung mới).
  5. *Providing learning guidance* (Hướng dẫn cách học).
  6. *Eliciting performance* (Tạo cơ hội thực hành/thể hiện năng lực).
  7. *Providing feedback* (Cung cấp phản hồi thông tin).
  8. *Assessing performance* (Đánh giá mức độ đạt mục tiêu).
  9. *Enhancing retention and transfer* (Khắc sâu ghi nhớ và vận dụng chuyển giao).
* **Mối liên hệ tương thích với cấu trúc 4 bước của Công văn 5512/BGDĐT-GDTrH**:
  * **Hoạt động 1: Khởi động / Xác định vấn đề** $\leftrightarrow$ Tương thích với **Gagné 1, 2, 3**: Dùng câu hỏi khảo sát gây tò mò để thu hút chú ý, công bố mục tiêu bài học và kích hoạt hiểu biết ban đầu của học sinh về AI.
  * **Hoạt động 2: Hình thành kiến thức mới** $\leftrightarrow$ Tương thích với **Gagné 4, 5**: Cung cấp video tương tác, slide trực quan so sánh; kèm theo các chỉ dẫn tư duy (*Guidance*) để học sinh khám phá bản chất AI.
  * **Hoạt động 3: Luyện tập** $\leftrightarrow$ Tương thích với **Gagné 6, 7, 8**: Tổ chức hoạt động kéo-thả gamification và giải quyết tình huống nhóm (*Case study*), hệ thống và giáo viên cung cấp phản hồi sửa sai (*Feedback*) và chấm điểm đánh giá (*Assessing*).
  * **Hoạt động 4: Vận dụng** $\leftrightarrow$ Tương thích với **Gagné 9**: Tổ chức cho học sinh lập "Quy tắc làm chủ AI" cá nhân, chuyển giao nhận thức trách nhiệm vào đời sống học tập hàng ngày (*Retention & Transfer*).

---

#### Câu 4: Ba yếu tố hiện diện trong Mô hình Cộng đồng Tìm hiểu (Community of Inquiry - CoI)
* **Ba hiện diện cốt lõi (Garrison, Anderson, & Archer, 2000)**:
  1. **Hiện diện giảng dạy (Teaching Presence)**: Sự thiết kế, tổ chức cấu trúc bài học, chỉ dẫn lộ trình, điều phối thảo luận và giải đáp thắc mắc của giáo viên.
  2. **Hiện diện xã hội (Social Presence)**: Cảm giác người học được nhìn nhận là một cá nhân thực thụ, có sự kết nối, tương tác an toàn, cởi mở và gắn kết với bạn bè trong không gian học tập.
  3. **Hiện diện nhận thức (Cognitive Presence)**: Mức độ người học có thể kiến tạo và củng cố ý nghĩa qua quá trình tự suy ngẫm, đối thoại liên tục và giải quyết vấn đề.
* **Vì sao không bắt buộc từng hoạt động riêng lẻ phải có đủ cả 3 hiện diện?**
  * Mỗi hoạt động cụ thể có mục tiêu vi mô chuyên biệt: Ví dụ, một bài tập kéo-thả phân loại 5 phút trên LMS nhằm củng cố nhận thức cá nhân thì chỉ cần tập trung tối đa vào *Hiện diện nhận thức (Cognitive)* và *Hiện diện giảng dạy (Teaching)* thông qua cơ chế phản hồi tự động. Ép buộc phải chèn *Hiện diện xã hội (Social)* vào bài tập kéo thả cá nhân này (như bắt chat nhóm) sẽ gây nhiễu, làm đứt gãy luồng tư duy độc lập.
  * *Nguyên tắc thiết kế*: Sự đan kết đầy đủ cả 3 hiện diện phải được **đảm bảo ở cấp độ toàn bộ tiến trình bài học** (cấp độ vĩ mô), trong đó các hoạt động trực tuyến tập trung sâu vào *Cognitive Presence*, còn các hoạt động trực tiếp trên lớp và diễn đàn đẩy mạnh *Social Presence* và *Teaching Presence*.

---

#### Câu 5: Phân biệt Định hướng (Orientation), Hướng dẫn (Guidance), Hỗ trợ người học (Learner Support) và Phản hồi (Feedback)

| Thuật ngữ | Khái niệm bản chất | Thời điểm cung cấp | Người học cần gì ở khâu này? |
| :--- | :--- | :--- | :--- |
| **Định hướng (Orientation)** | Cung cấp bức tranh toàn cảnh về khóa học/bài học: mục tiêu cần đạt, lộ trình học, cấu trúc các hoạt động, thời hạn nộp bài và tiêu chí đánh giá. | **TRƯỚC** khi bắt đầu bài học / nhiệm vụ. | • Biết rõ: *Tôi học bài này để làm gì? Mất bao nhiêu phút? Cần làm những bước nào? Tiêu chuẩn hoàn thành là gì?* |
| **Hướng dẫn (Guidance)** | Cung cấp chỉ dẫn chi tiết về phương pháp tư duy, các bước thao tác kỹ thuật, gợi ý chiến lược học tập để giải quyết nhiệm vụ cụ thể. | **TRƯỚC & TRONG** quá trình thực hiện nhiệm vụ. | • Biết rõ: *Tôi phải bấm vào đâu? Kéo cái gì vào đâu? Phân công nhóm ra sao? Gợi ý giải quyết tình huống gồm những bước nào?* |
| **Hỗ trợ người học (Learner Support)** | Hệ thống trợ giúp giải quyết các rào cản kỹ thuật, công nghệ, tâm lý hoặc học liệu phát sinh ngoài dự kiến (Helpdesk, FAQ, kênh chat với giáo viên/trợ giảng). | **BẤT CỨ KHI NÀO** người học gặp trục trặc, bế tắc. | • Biết rõ: *Nếu video không tải được, quên mật khẩu LMS, hoặc không hiểu đề thì liên hệ ai? Tìm tài liệu hướng dẫn kỹ thuật ở đâu?* |
| **Phản hồi (Feedback)** | Thông tin cung cấp cho người học về kết quả thực hiện nhiệm vụ, chỉ rõ điểm đúng, nguyên nhân của lỗi sai và cách khắc phục để tiến bộ. | **SAU** khi người học thực hiện một hành động hoặc hoàn thành nhiệm vụ. | • Biết rõ: *Tôi làm đúng hay sai? Vì sao phương án đó sai? Tôi cần điều chỉnh tư duy hoặc làm lại như thế nào để đạt điểm tối đa?* |

* *Tài liệu tham khảo*: Quality Matters (2018), *Higher Education Rubric, Standards 1 (Course Overview & Introduction) and Standards 7 (Learner Support)*; Clark & Mayer (2011), Chapter 12 ("Providing Practice and Feedback"), pp. 271–304.

---

### B. Bảng đối chiếu tiến trình bài học theo các khung sư phạm (CV5512 – Gagné – ABC/Horton – CoI)

| Pha / Hoạt động trong bài | CV5512 / Gagné (9 Events) | ABC Learning Design / Horton | Community of Inquiry (CoI) | Nhận xét & Quyết định thiết kế sư phạm |
| :--- | :--- | :--- | :--- | :--- |
| **HĐ 1: Khởi động (LMS - 5 phút)**<br>Khảo sát 2 câu hỏi ngắn về nguồn gốc AI và kể tên công cụ AI. | • **CV5512**: Khởi động.<br>• **Gagné**: Event 1 (Attention), Event 2 (Objectives), Event 3 (Prior recall). | • **ABC**: Investigation.<br>• **Horton**: Do (nhẹ) / Connect. | • **Teaching Presence**: Câu hỏi định hướng của GV.<br>• **Cognitive Presence**: Kích hoạt nhận thức ban đầu. | **Giữ**: Giúp học sinh nhận diện lỗ hổng kiến thức (tưởng AI tự sinh ra) để tạo động lực tò mò bước vào bài học mới. |
| **HĐ 2.1: Bản chất của AI (LMS - 20 phút)**<br>Xem video tương tác có pop-up trắc nghiệm neo chặn. | • **CV5512**: Hình thành kiến thức mới (Pha 1).<br>• **Gagné**: Event 4 (Stimulus), Event 5 (Guidance), Event 6 (Performance). | • **ABC**: Acquisition & Practice.<br>• **Horton**: Absorb đan xen Do. | • **Cognitive Presence**: Khám phá và xử lý thông tin tích cực.<br>• **Teaching Presence**: Chỉ dẫn chốt ý sau câu hỏi pop-up. | **Sửa/Bổ sung**: Không để video chạy thụ động; bổ sung 2 điểm dừng pop-up bắt buộc trả lời đúng để kiểm soát tiến độ tự học ở nhà. |
| **HĐ 2.2: AI quanh ta (LMS - 20 phút)**<br>Trò chơi kéo-thả phân loại thiết bị AI và ghép nối hành động con người. | • **CV5512**: Hình thành kiến thức mới (Pha 2).<br>• **Gagné**: Event 6 (Eliciting performance), Event 7 (Feedback). | • **ABC**: Practice.<br>• **Horton**: Do. | • **Cognitive Presence**: Phân loại và kết nối logic.<br>• **Teaching Presence**: Hệ thống phản hồi tự động sửa sai. | **Giữ**: Thiết kế dạng game hóa (Gamification) tạo hứng thú; cài đặt điều kiện hoàn thành $\ge 8/10$ điểm mới được tính hoàn thành bài học trực tuyến. |
| **HĐ 2.3: Quyền quyết định thuộc về ai? (Trực tiếp trên lớp - 10 phút)**<br>So sánh Xe đạp điện vs Robot hút bụi; nguyên tắc Human-in-the-loop. | • **CV5512**: Hình thành kiến thức mới (Pha 3).<br>• **Gagné**: Event 4 (Stimulus trực quan), Event 5 (Guidance). | • **ABC**: Discussion & Acquisition.<br>• **Horton**: Absorb & Connect. | • **Teaching Presence**: GV dẫn dắt, đặt câu hỏi gợi mở.<br>• **Social Presence**: Không khí thảo luận trực tiếp toàn lớp. | **Giữ**: Sử dụng hình tượng ẩn dụ quen thuộc (*Analogy*) để khắc sâu nguyên tắc cốt lõi: AI chỉ là công cụ hỗ trợ nhân lực, con người phải cầm lái. |
| **HĐ 3: Luyện tập (Trực tiếp trên lớp - 20 phút)**<br>Phân tích 2 tình huống sự cố AI (Case study) theo nhóm, ghi bảng phụ. | • **CV5512**: Luyện tập.<br>• **Gagné**: Event 6 (Performance), Event 7 (Feedback), Event 8 (Assessment). | • **ABC**: Collaboration & Discussion.<br>• **Horton**: Do & Connect. | • **Social Presence**: Tranh luận, phân công nhóm sôi nổi.<br>• **Cognitive Presence**: Tư duy phản biện, truy tìm nguyên nhân cốt lõi.<br>• **Teaching Presence**: GV nhận xét, chuẩn hóa kiến thức. | **Bổ sung**: Thiết kế Rubric đánh giá nhóm rõ ràng về 2 tiêu chí: (1) Xác định đúng lỗi do con người không kiểm tra, (2) Lập luận thuyết phục. |
| **HĐ 4: Vận dụng (Trực tiếp trên lớp - 15 phút)**<br>Viết quy tắc NÊN / KHÔNG NÊN dán góc "Tuyên ngôn làm chủ AI". | • **CV5512**: Vận dụng.<br>• **Gagné**: Event 9 (Retention & Transfer). | • **ABC**: Production.<br>• **Horton**: Connect. | • **Cognitive Presence**: Siêu nhận thức, tự soi chiếu bản thân.<br>• **Social Presence**: Chia sẻ tuyên ngôn chung của tập thể lớp. | **Giữ**: Không dùng bài tập trắc nghiệm khô khan; yêu cầu viết sản phẩm thực tế dán bảng lớp để chuyển giao nhận thức trách nhiệm vào hành vi sống. |

---

## 1.4. Khảo sát và lựa chọn công cụ phát triển học liệu

### Phiếu số 01: Nhóm Cơ bản – Soạn nội dung & Trình chiếu
* **1. Thông tin công cụ**: Microsoft PowerPoint 365 (Microsoft) – Trang chủ: `https://www.microsoft.com/powerpoint`. Nhóm chức năng: Thiết kế bài giảng trình chiếu trực quan trên lớp.
* **2. Sản phẩm / Chức năng phục vụ bài học**:
  * Tạo bộ slide bài giảng cho Tiết 2 trực tiếp trên lớp.
  * Tính năng *Morph Transition* và *SmartArt*: Trực quan hóa tiến trình phân loại và sự tương phản giữa "Xe đạp điện" và "Robot hút bụi".
  * Tính năng chèn ghi chú (*Presenter Notes*) hỗ trợ kịch bản câu hỏi đàm thoại của giáo viên.
* **3. Quy trình thực hiện (5 bước)**:
  * Bước 1: Tạo tệp trình chiếu mới tỉ lệ chuẩn 16:9, thiết lập bảng màu chủ đạo (Xanh dương - Trắng).
  * Bước 2: Bố cục slide theo nguyên tắc Mayer: Ít chữ, kích thước phông chữ tối thiểu 28pt, chèn ảnh thực tế có độ phân giải cao.
  * Bước 3: Áp dụng hiệu ứng chuyển động nhẹ (*Appear/Fade* theo tiến trình nói) để định hướng chú ý (*Signaling*).
  * Bước 4: Chèn các câu hỏi thảo luận nhóm và đồng hồ đếm ngược 7 phút cho hoạt động Case study.
  * Bước 5: Xuất bản tệp `.pptx` để trình chiếu trực tiếp và tệp `.pdf` để tải lên LMS làm tài liệu ôn tập cho học sinh.
* **4. Trải nghiệm & Minh chứng**:
  * Đã tạo thành công tệp `bai_1_tiet_2_canva_slide.pptx` gồm 12 slide trực quan, không có slide nào vượt quá 4 dòng chữ. Minh chứng kiểm tra chạy mượt mà trên máy chiếu lớp học.
* **5. Đánh giá theo Khung Bates SECTIONS & Kết luận**:
  * **S** (Students): Học sinh lớp 6 dễ quan sát, hình ảnh rõ nét từ cuối lớp.
  * **E** (Ease of use): Cực kỳ dễ sử dụng, hầu hết giáo viên đều thành thạo.
  * **C** (Costs): Đã có bản quyền trong tài khoản nhà trường.
  * **T** (Teaching functions): Đảm nhiệm xuất sắc vai trò giảng dạy trực tiếp và điều phối thảo luận.
  * **I** (Interaction): Tương tác trực tiếp một chiều trên slide, cần kết hợp bảng phụ và giấy note thực tế.
  * **O** (Organizational): Đồng bộ hoàn hảo với hạ tầng máy chiếu và tivi của nhà trường.
  * **N** (Networking): Không hỗ trợ mạng lưới tương tác trực tuyến sâu nếu chạy offline.
  * **S** (Security & privacy): An toàn tuyệt đối, dữ liệu lưu cục bộ.
  * $\rightarrow$ **KẾT LUẬN: CHỌN** cho Hoạt động 2.3 và 3 (Tiết 2 trực tiếp trên lớp).

---

### Phiếu số 02: Nhóm Thiết kế Media – Biên tập Đa phương tiện
* **2. Thông tin công cụ**: Canva Pro for Education (Canva Pty Ltd) – Trang chủ: `https://www.canva.com`. Nhóm chức năng: Thiết kế đồ họa đa phương tiện, infographic và biên tập video bài học.
* **2. Sản phẩm / Chức năng phục vụ bài học**:
  * Thiết kế Infographic tóm tắt: "Quy trình 3 bước con người tạo ra AI: Thu thập dữ liệu $\rightarrow$ Lập trình thuật toán $\rightarrow$ Triển khai & Kiểm soát".
  * Biên tập và chèn phụ đề đồng bộ cho video hoạt họa ngắn 3 phút về bản chất AI.
  * Thư viện hình ảnh và biểu tượng bản quyền phong phú chuẩn phong cách giáo dục.
* **3. Quy trình thực hiện (5 bước)**:
  * Bước 1: Chọn mẫu kích thước Infographic chuẩn (1080 x 1920 px) và mẫu Video giáo dục (1920 x 1080 px).
  * Bước 2: Tải lên video nguồn và tài nguyên đồ họa; kéo thả biểu tượng minh họa tương ứng với từng bước.
  * Bước 3: Áp dụng bảng màu tương phản cao (High Contrast) tuân thủ chuẩn WCAG 2.1 AA.
  * Bước 4: Tạo phụ đề tự động (*Auto-captions*), hiệu đính chính tả và căn chỉnh thời gian khớp lời thuyết minh.
  * Bước 5: Xuất bản video định dạng `.mp4` chuẩn 1080p và ảnh infographic định dạng `.png` để nhúng vào LMS.
* **4. Trải nghiệm & Minh chứng**:
  * Đã thiết kế hoàn thiện Infographic tóm tắt bài học và dựng video hoàn chỉnh `video_bai_hoc.mp4` dung lượng 13.5 MB, hình ảnh sắc nét, phụ đề rõ ràng.
* **5. Đánh giá theo Khung Bates SECTIONS & Kết luận**:
  * **S**: Rất cuốn hút học sinh lứa tuổi 11-12 tuổi nhờ màu sắc hiện đại, tươi sáng.
  * **E**: Kéo thả trực quan trên trình duyệt web, không đòi hỏi kỹ năng dựng phim chuyên nghiệp.
  * **C**: Miễn phí 100% tài khoản Canva Giáo dục cho giáo viên và học sinh.
  * **T**: Hỗ trợ xuất sắc chức năng trực quan hóa kiến thức phức tạp thành sơ đồ dễ hiểu.
  * **I**: Cung cấp sản phẩm xem/nghe tĩnh; cần công cụ khác để tăng tính tương tác hai chiều.
  * **O**: Không đòi hỏi cài đặt phần mềm nặng, tương thích mọi hệ điều hành máy tính/máy tính bảng.
  * **N**: Hỗ trợ chia sẻ liên kết xem trực tiếp hoặc làm việc nhóm thời gian thực.
  * **S**: Tuân thủ tiêu chuẩn an toàn dữ liệu giáo dục (COPPA/FERPA compliant).
  * $\rightarrow$ **KẾT LUẬN: CHỌN** để sản xuất tài nguyên media gốc (Video, Infographic, Phiếu in).

---

### Phiếu số 03: Nhóm Authoring Tương tác – E-learning Chuyên dụng
* **1. Thông tin công cụ**: H5P (Joubel / H5P Group) tích hợp trên LMS Moodle – Trang chủ: `https://h5p.org`. Nhóm chức năng: Thiết kế gói học liệu tương tác chuẩn HTML5/SCORM.
* **2. Sản phẩm / Chức năng phục vụ bài học**:
  * Chức năng *Interactive Video*: Chèn các điểm dừng câu hỏi trắc nghiệm chặn dòng (*Pop-up checkpoints*) tại các giây then chốt của video bài giảng.
  * Chức năng *Drag and Drop*: Thiết kế bài tập kéo-thả phân loại thiết bị AI và ghép nối hành động.
  * Cơ chế đồng bộ điểm số tự động vào Sổ điểm LMS (*Gradebook integration via LTI/xAPI*).
* **3. Quy trình thực hiện (6 bước)**:
  * Bước 1: Đăng nhập LMS, thêm hoạt động "H5P Interactive Content".
  * Bước 2: Chọn kiểu nội dung *Interactive Video*, tải lên tệp `video_bai_hoc.mp4`.
  * Bước 3: Thiết lập các điểm dừng: Giây 01:45 (Câu hỏi 1: AI do ai lập trình?), Giây 03:10 (Câu hỏi 2: Vai trò của con người trong việc cung cấp dữ liệu).
  * Bước 4: Thiết lập hành vi tương tác: Bật tùy chọn "Pause video", khóa tua nhanh, bắt buộc trả lời đúng mới được xem tiếp.
  * Bước 5: Cấu hình phản hồi tức thì với lời giải thích ngắn gọn khi học sinh chọn sai.
  * Bước 6: Lưu và cấu hình điều kiện hoàn thành bài học trên LMS: Đạt 100% thời lượng xem và điểm quiz $\ge 80\%$.
* **4. Trải nghiệm & Minh chứng**:
  * Đã tạo thành công gói video tương tác trên LMS, log hệ thống ghi nhận chính xác trạng thái hoàn thành và điểm số của học sinh vào sổ điểm.
* **5. Đánh giá theo Khung Bates SECTIONS & Kết luận**:
  * **S**: Học sinh thực hiện mượt mà trên trình duyệt điện thoại và máy tính, không cần cài app phụ.
  * **E**: Giao diện thiết lập trực quan, dễ làm quen đối với giáo viên đã biết dùng LMS.
  * **C**: Mã nguồn mở miễn phí khi tích hợp sẵn trong Moodle/WordPress.
  * **T**: Đáp ứng hoàn hảo nguyên tắc *Segmenting* của Mayer và biến cố kích thích thực hành của Gagné.
  * **I**: Mức độ tương tác cá nhân - học liệu rất cao, có phản hồi tức thì (*Immediate feedback*).
  * **O**: Tích hợp đồng bộ tuyệt đối với hệ thống quản lý học tập LMS của nhà trường.
  * **N**: Không hỗ trợ mạng lưới tương tác xã hội giữa học sinh với học sinh (chỉ tương tác với máy).
  * **S**: An toàn cao, dữ liệu điểm số và tiến trình lưu trữ trên máy chủ LMS nội bộ của trường.
  * $\rightarrow$ **KẾT LUẬN: CHỌN** làm công cụ chính triển khai hoạt động học trực tuyến Tiết 1 trên LMS.

---

### Phiếu số 04: Nhóm AI Hỗ trợ Sản xuất – Trợ lý Tạo sinh Nội dung & Ý tưởng
* **1. Thông tin công cụ**: Claude 3.5 Sonnet (Anthropic) / ChatGPT Plus (OpenAI). Nhóm chức năng: Trợ lý AI hỗ trợ xây dựng kịch bản sư phạm, gợi ý tình huống thực tiễn và tinh chỉnh ngôn ngữ.
* **2. Sản phẩm / Chức năng phục vụ bài học**:
  * Sinh các kịch bản tình huống đời sống (*Case studies*) về sự cố sai sót khi sử dụng AI phù hợp với tâm lý học sinh lớp 6.
  * Xây dựng câu hỏi gợi ý phản biện và bộ tiêu chí Rubric đánh giá năng lực tư duy lấy con người làm trung tâm.
  * Kiểm tra và hiệu đính văn phong sư phạm theo định hướng Thông tư 32/2018 và Công văn 5512.
* **3. Quy trình thực hiện (5 bước)**:
  * Bước 1: Xác định mục tiêu sư phạm cụ thể và đối tượng người học (Học sinh lớp 6, 11-12 tuổi).
  * Bước 2: Thiết lập Prompt phân vai chuyên gia: Cung cấp tài liệu nguồn chuẩn mực (Khung UNESCO 2024 về năng lực AI, Khuyến nghị của Bộ GD Hoa Kỳ 2023).
  * Bước 3: Ra lệnh cho AI sinh 03 tình huống giả định thực tế về sự cố tin tưởng mù quáng vào AI.
  * Bước 4: Giáo viên trực tiếp thẩm định, loại bỏ các chi tiết không thực tế, chọn lọc 02 tình huống đắt giá nhất (Tình huống bài văn Lịch sử bịa sai ngày và tình huống xe đi theo bản đồ số lao xuống ruộng).
  * Bước 5: Tinh chỉnh lại câu chữ thuần Việt, gần gũi với lứa tuổi THCS để đưa vào Phiếu học tập nhóm.
* **4. Trải nghiệm & Minh chứng**:
  * Tạo được bộ 2 tình huống sắc sảo, gắn liền với thực tiễn học sinh. Minh chứng đối chiếu: AI sinh ra bản thô, giáo viên đã biên tập 30% nội dung để đảm bảo tính giáo dục và chuẩn mực đạo đức.
* **5. Đánh giá theo Khung Bates SECTIONS & Kết luận**:
  * **S**: Gián tiếp phục vụ học sinh thông qua việc nâng cao chất lượng tình huống học tập.
  * **E**: Giao diện đàm thoại ngôn ngữ tự nhiên cực kỳ nhanh chóng và linh hoạt.
  * **C**: Có phiên bản miễn phí đáp ứng tốt nhu cầu; bản nâng cao có phí thuê bao hàng tháng.
  * **T**: Hỗ trợ tăng năng suất thiết kế kịch bản sư phạm lên gấp 3-4 lần; mở rộng góc nhìn phản biện.
  * **I**: Tương tác mạnh mẽ giữa giáo viên và AI trong giai đoạn thiết kế (*Design phase*).
  * **O**: Không phụ thuộc hạ tầng trường học.
  * **N**: Chia sẻ được prompt và kết quả với đồng nghiệp trong tổ bộ môn.
  * **S**: Lưu ý không đưa thông tin nhạy cảm của học sinh thật lên các mô hình AI đám mây.
  * $\rightarrow$ **KẾT LUẬN: CHỌN** làm công cụ đồng nghiệp hỗ trợ khâu chuẩn bị nội dung và kịch bản sư phạm.

---

### Phiếu số 05: Nhóm AI Sinh Sản phẩm / Web App Tương tác – Môi trường Sinh Mã Nguồn
* **1. Thông tin công cụ**: Antigravity Studio / Google AI Studio Build. Nhóm chức năng: Sinh mã nguồn giao diện web tương tác độc lập (HTML5/CSS3/JavaScript thuần).
* **2. Sản phẩm / Chức năng phục vụ bài học**:
  * Tự động tạo lập ứng dụng web tương tác mini: Minigame kéo-thả phân loại thiết bị AI và ghép nối hành động con người chạy độc lập không phụ thuộc plugin LMS.
  * Tích hợp âm thanh hiệu ứng (Success/Error chime), hệ thống tính điểm, đếm lượt làm lại và hiển thị phản hồi giải thích khoa học.
  * Thiết kế giao diện co giãn thông minh (*Responsive Design*) tương thích màn hình máy tính và điện thoại thông minh.
* **3. Quy trình thực hiện (6 bước)**:
  * Bước 1: Viết bản đặc tả kỹ thuật sư phạm (System Spec): Quy định rõ danh sách 8 thiết bị cần phân loại, 3 cặp ghép nối con người - AI, màu sắc theo chuẩn WCAG 2.1 AA.
  * Bước 2: Nạp prompt đặc tả vào môi trường AI yêu cầu sinh toàn bộ mã nguồn HTML5/CSS/JS gói gọn trong 01 tệp duy nhất để dễ nhúng iframe.
  * Bước 3: AI sinh mã nguồn phiên bản 1 (v1.0).
  * Bước 4: Kiểm thử chức năng (*Functional Testing*): Phát hiện lỗi kéo thả trên màn hình cảm ứng điện thoại chưa nhạy (*Touch event*).
  * Bước 5: Yêu cầu AI tinh chỉnh mã: Bổ sung thư viện hỗ trợ sự kiện chạm tay (*Touch Punch/Pointer Events*), thêm nút "Làm lại" và hiệu ứng rung khi chọn sai.
  * Bước 6: Kiểm thử nghiệm thu (v2.0) đạt chuẩn và nhúng trực tiếp vào trang bài học LMS qua thẻ `<iframe>`.
* **4. Trải nghiệm & Minh chứng**:
  * Đã tạo thành công tệp học liệu tương tác hoàn chỉnh `hoc_lieu_3_gamification_keo_tha.html` dung lượng 35.9 KB. Chạy thử nghiệm thành công 100% trên cả máy tính để bàn Chrome và điện thoại iPhone Safari.
* **5. Đánh giá theo Khung Bates SECTIONS & Kết luận**:
  * **S**: Trải nghiệm vuốt chạm mượt mà, màu sắc vui tươi, tạo cảm giác như đang chơi game thực thụ.
  * **E**: Người học chỉ cần mở link là chơi ngay; về phía giáo viên, cần có năng lực viết prompt đặc tả chính xác.
  * **C**: Miễn phí, không mất chi phí duy trì máy chủ riêng vì có thể chạy trực tiếp trên file tĩnh hoặc GitHub Pages.
  * **T**: Cá nhân hóa việc luyện tập, cung cấp phản hồi vi mô tức thì theo đúng triết lý *Practice & Feedback* của Clark & Mayer.
  * **I**: Tương tác đa chiều giữa người học và học liệu mô phỏng.
  * **O**: Dễ dàng đóng gói thành tệp HTML hoặc gói SCORM để nhúng vào bất kỳ hệ thống LMS nào (Moodle, Canvas, Google Classroom).
  * **N**: Cho phép chia sẻ đường link mở cho học sinh tự ôn luyện ở nhà.
  * **S**: Mã nguồn sạch, không thu thập dữ liệu người dùng, bảo vệ quyền riêng tư tuyệt đối cho học sinh lớp 6.
  * $\rightarrow$ **KẾT LUẬN: CHỌN** để phát triển học liệu tương tác cao cấp phục vụ Hoạt động 2.2 trên LMS.

---

### Bảng so sánh tổng hợp lựa chọn công cụ cho từng học liệu / hoạt động của Bài 1

| Tên công cụ khảo sát | Nhóm phân loại | Ưu thế vượt trội | Hạn chế chính | Hoạt động được chọn áp dụng | Lý do lựa chọn (Căn cứ SECTIONS) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Microsoft PowerPoint 365** | Cơ bản / Soạn nội dung & Trình chiếu | Trình chiếu trực quan, ổn định, hỗ trợ tương tác đàm thoại trực tiếp trên lớp. | Khó tương tác hai chiều cá nhân hóa trên môi trường mạng. | **Hoạt động 2.3 & Hoạt động 3** (Tiết 2 trực tiếp trên lớp). | **T, E, O**: Phù hợp tối đa với hạ tầng lớp học và thói quen giảng dạy; tối ưu kênh thị giác với hình ảnh so sánh trực quan lớn. |
| **Canva Pro Education** | Thiết kế Media & Đa phương tiện | Thiết kế đồ họa, infographic và dựng video bài giảng có phụ đề nhanh chóng, thẩm mỹ cao. | Sản phẩm tĩnh hoặc video thụ động, không có điểm dừng tương tác logic. | **Học liệu Video nguồn & Infographic tóm tắt** cho Tiết 1 và Tiết 2. | **S, C, T**: Đồ họa bắt mắt với lứa tuổi 11-12 tuổi; miễn phí bản quyền giáo dục; hỗ trợ chuẩn tiếp cận phụ đề. |
| **H5P trên Moodle LMS** | Authoring tương tác chuyên dụng | Tạo điểm dừng video tương tác và bài tập củng cố đồng bộ thẳng vào Sổ điểm LMS. | Cần cài đặt plugin hoặc có nền tảng LMS hỗ trợ. | **Hoạt động 2.1 (Video tương tác)** trên hệ thống LMS. | **T, I, O**: Kiểm soát 100% tiến độ học tập bắt buộc; chấm điểm tự động; ngăn chặn tình trạng học sinh tua lướt video. |
| **Claude / ChatGPT (AI Text)** | AI Hỗ trợ quy trình sản xuất | Tối ưu hóa thời gian soạn kịch bản tình huống thực tế (*Case study*) và gợi ý phản biện sâu sắc. | Có thể xuất hiện thông tin ảo (*Hallucination*), cần giáo viên kiểm định chuyên môn. | **Kịch bản Hoạt động 3 Luyện tập** (Tình huống sự cố AI) & Thiết kế Rubric. | **T, E**: Nhân sức lao động của giáo viên; đưa các khuyến nghị học thuật quốc tế (UNESCO, US Ed) vào tình huống Việt Nam. |
| **AI Studio (AI Sinh Web App)** | AI Sinh sản phẩm / Mô phỏng Web App | Tạo ra học liệu tương tác HTML5 tùy biến cao, mượt mà, không phụ thuộc hệ thống ngoài. | Đòi hỏi giáo viên phải có tư duy đặc tả logic kỹ thuật sư phạm rõ ràng. | **Hoạt động 2.2 (Trò chơi kéo thả phân loại AI)** trên LMS. | **S, I, S**: Trải nghiệm người dùng tuyệt vời; tương tác tức thì; an toàn bảo mật dữ liệu tuyệt đối cho học sinh nhỏ tuổi. |

---

## 1.5. Thử nghiệm hai cách sử dụng AI trong phát triển học liệu

### Thử nghiệm A: AI hỗ trợ một khâu của quy trình truyền thống
* **1. Nhiệm vụ lựa chọn**: Xây dựng 02 kịch bản tình huống thực tế (*Case study*) và hệ thống câu hỏi gợi mở phục vụ **Hoạt động 3: Luyện tập (Tiết 2 trên lớp)** nhằm giúp học sinh lớp 6 nhận diện lỗi sai và khẳng định trách nhiệm thuộc về con người khi sử dụng AI.
* **2. Cách làm truyền thống (Không dùng AI)**:
  * Giáo viên tự tìm kiếm các bài báo trên mạng, tự nghĩ ra tình huống giả định theo kinh nghiệm cá nhân.
  * *Hạn chế*: Tốn nhiều thời gian (thường mất 2-3 giờ); tình huống dễ bị quá phức tạp hoặc mang tính lý thuyết hàn lâm, chưa sát với tâm lý và hành vi hàng ngày của học sinh lớp 6.
* **3. Cách làm có AI hỗ trợ (Thử nghiệm với Claude / ChatGPT)**:
  * **Đầu vào (Prompting kỹ thuật đóng vai chuyên gia)**:
    ```text
    "Bạn là một chuyên gia sư phạm Tin học và đạo đức công nghệ giáo dục. 
    Dựa trên khuyến nghị của UNESCO (2024) về 'AI do con người dẫn dắt' và Báo cáo của Bộ GD Hoa Kỳ (2023) 
    về nguyên tắc 'Human-in-the-loop' (AI như chiếc xe đạp điện, con người phải cầm lái):
    Hãy xây dựng 02 tình huống ngắn (khoảng 80-100 từ/tình huống), thật gần gũi và hài hước với học sinh lớp 6 (11 tuổi) 
    về việc tin tưởng mù quáng vào AI dẫn đến hậu quả dở khóc dở cười.
    Mỗi tình huống kèm theo 2 câu hỏi dẫn dắt: (1) Nguyên nhân sự cố bắt nguồn từ đâu? (2) Ai là người chịu trách nhiệm cuối cùng? Tại sao?"
    ```
  * **Đầu ra do AI sinh ra (Output thô)**:
    * *Tình huống 1*: Học sinh nhờ AI viết bài văn kể chuyện lịch sử, AI bịa ra nhân vật thời Trần đi xe máy, học sinh nộp luôn cho cô giáo và bị điểm kém nhưng cãi do máy tính viết.
    * *Tình huống 2*: Tài xế lái xe ô tô bật ứng dụng chỉ đường thông minh đi đường tắt né kẹt xe, ứng dụng dẫn thẳng vào bờ ruộng bùn lầy, tài xế đổ lỗi cho phần mềm định vị.
* **4. Kiểm chứng, đối chiếu học thuật và điều chỉnh của con người**:
  * *Đối chiếu nguồn chuẩn*: Khung UNESCO 2024 (Trang 17, Mục 2.2: *"AI tools should not replace the legitimate accountability of humans"* - Công cụ AI không được thay thế trách nhiệm giải trình hợp pháp của con người).
  * *Can thiệp của Giáo viên (Human Oversight)*: 
    * Ở Tình huống 1: Tinh chỉnh lại thành "Bạn Nam dùng AI tìm ngày diễn ra chiến dịch Điện Biên Phủ, AI bịa ra ngày 30/2, Nam chép nguyên văn vào bài tập Lịch sử". Chi tiết ngày "30 tháng 2" phi thực tế giúp học sinh lớp 6 bật cười ngay và nhận ra ngay sự tắc trách của người dùng vì không kiểm tra lại.
    * Ở Tình huống 2: Giữ nguyên chi tiết xe đi theo chỉ đường lao xuống ruộng ngập nước, bổ sung câu hỏi: *"Nếu tài xế quan sát bằng mắt qua kính lái, sự cố có xảy ra không?"* để khắc sâu bài học về việc con người phải luôn quan sát và cầm lái.
* **5. Kết luận**:
  * *AI giúp gì*: Giúp khơi gợi ý tưởng tình huống nhanh chóng, định hình cấu trúc kịch bản và lời thoại sinh động chỉ trong 30 giây.
  * *Phần con người bắt buộc phải tự quyết*: Giáo viên phải kiểm định tính chuẩn mực đạo đức sư phạm, căn chỉnh độ khó nhận thức phù hợp lứa tuổi 11 tuổi và lồng ghép chính xác thông điệp trách nhiệm giải trình theo đúng chương trình giáo dục phổ thông.
  * $\rightarrow$ **Quyết định**: Sử dụng trọn vẹn 2 tình huống đã tinh chỉnh này vào Phiếu học tập nhóm của bài học chính.

---

### Thử nghiệm B: AI sinh học liệu tương tác hoặc web app mini
* **1. Nhiệm vụ lựa chọn**: Xây dựng một ứng dụng web tương tác mini (*Interactive HTML5 Web App*) phục vụ **Hoạt động 2.2 (Tiết 1 trên LMS)**: Trò chơi Gamification kéo - thả phân loại thiết bị "Có dùng AI" / "Không dùng AI" và ghép nối "Công cụ AI với hành động con người tương ứng".
* **2. Bản đặc tả sư phạm & kỹ thuật trước khi sinh mã (System Specification)**:
  * *Người học*: Học sinh lớp 6 (11–12 tuổi), thao tác trên màn hình cảm ứng điện thoại hoặc chuột máy tính.
  * *Mục tiêu/YCCĐ*: Phân biệt được công cụ có ứng dụng AI và công cụ tự động hóa thông thường; chỉ ra được hành động con người đứng sau AI.
  * *Loại tri thức*: Tri thức Thực tế & Khái niệm (*Factual & Conceptual Knowledge*).
  * *Logic tương tác*: 
    * Nhiệm vụ 1: 6 thẻ thiết bị (Google Dịch, Mở khóa FaceID, Robot hút bụi tự vẽ bản đồ; Máy tính Casio, Nồi cơm điện cơ, Quạt máy bấm nút) cần kéo vào 2 vùng thả: "Có dùng AI" và "Không dùng AI".
    * Nhiệm vụ 2: Ghép 2 thẻ công cụ AI với hành động của con người (Trợ lý giọng nói $\leftrightarrow$ Con người nạp dữ liệu âm thanh; Ứng dụng gợi ý phim $\leftrightarrow$ Con người đánh giá sở thích).
  * *Phản hồi*: Có âm thanh chúc mừng khi thả đúng, rung lắc nhẹ kèm thông báo giải thích ngắn gọn khi thả sai; nút "Làm lại" để thử lại nhiều lần (*UDL*).
  * *Giao diện/Accessibility*: Nền sáng dịu mắt, phông chữ không chân tròn trịa (*Nunito/Quicksand*), kích thước vùng bấm lớn ($\ge 44 \times 44$ px), độ tương phản đạt chuẩn WCAG 2.1 AA.
  * *Tiêu chí nghiệm thu*: Đạt điểm tối đa 10/10; chạy mượt mà không giật lag trên mọi trình duyệt web; không chứa bất kỳ thư viện ngoài nặng nề nào.
* **3. Quy trình thực hiện (Từ Đặc tả $\rightarrow$ AI tạo $\rightarrow$ Kiểm thử $\rightarrow$ Tinh chỉnh)**:
  * *Bước 1 (Đặc tả $\rightarrow$ AI tạo)*: Cung cấp bản đặc tả trên cho AI, yêu cầu sinh 01 tệp `index.html` duy nhất chứa đầy đủ mã HTML5, CSS3 hiện đại và JavaScript xử lý tương tác kéo thả.
  * *Bước 2 (Kiểm thử vòng 1)*: 
    * Chạy thử trên máy tính: Chuột kéo thả mượt mà, ghi nhận điểm chính xác.
    * *Phát hiện lỗi kỹ thuật*: Khi mở trên điện thoại thông minh, sự kiện cảm ứng chạm tay (*Touch events: touchstart, touchmove, touchend*) không hoạt động được với chuẩn `HTML5 Drag and Drop API` mặc định, khiến học sinh dùng điện thoại không thể kéo thẻ bài được!
  * *Bước 3 (Yêu cầu AI điều chỉnh)*:
    * Yêu cầu AI viết lại logic kéo thả bằng `Pointer Events` thống nhất cho cả chuột (`pointerdown`, `pointermove`, `pointerup`) và màn hình cảm ứng; bổ sung hiệu ứng âm thanh bằng `Web Audio API` (tự tổng hợp sóng sin, không cần tải tệp mp3 ngoài tránh lỗi mạng).
  * *Bước 4 (Kiểm thử vòng 2 & Nghiệm thu)*:
    * Chạy thử nghiệm trên cả iPhone (Safari) và máy tính Windows (Chrome): Kéo thả cảm ứng cực kỳ mượt mà, phản hồi âm thanh trong trẻo, cơ chế tính điểm và hiển thị giải thích hoạt động hoàn hảo 100%.
* **4. Minh chứng sản phẩm**:
  * Tệp mã nguồn hoàn chỉnh đã được tạo lập tại workspace: `hoc_lieu_3_gamification_keo_tha.html`.
  * Có thể nhúng trực tiếp vào LMS qua iframe: `<iframe src="hoc_lieu_3_gamification_keo_tha.html" width="100%" height="650px" frameborder="0"></iframe>`.
* **5. Kết luận**:
  * *Khả năng của AI*: Có thể sinh toàn bộ một ứng dụng tương tác giáo dục chất lượng cao chỉ trong vài giây nếu có bản đặc tả sư phạm rõ ràng và chuẩn mực.
  * *Vai trò quyết định của con người*: Con người đóng vai trò là "Kiến trúc sư trưởng" (đưa ra ý đồ sư phạm, luật chơi, nội dung phân loại) và "Chuyên gia kiểm thử chất lượng" (phát hiện lỗi tương thích thiết bị di động để yêu cầu tinh chỉnh).
  * $\rightarrow$ **Quyết định**: Sử dụng trực tiếp sản phẩm web app này làm học liệu tương tác trung tâm cho Hoạt động 2.2 của bài học trên hệ thống LMS.

---
*(Hết Phần 1 - Tiếp tục chuyển sang Phần 2: Thiết kế - Phát triển - Triển khai bài học LMS theo mô hình ADDIE)*

