# PART1
# Problem1
```
Khi hàm runFooBarProgram() được gọi, nó sẽ lấy giá trị từ các trường nhập liệu có ID "x" và "y", sau đó chuyển đổi chúng thành số nguyên.
Một biến chuỗi rỗng có tên là output được khởi tạo để lưu trữ kết quả.
Chương trình sử dụng một vòng lặp for để lặp lại từ 1 đến 100.
Đối với mỗi số trong vòng lặp:
Nếu số đó chia hết cho cả x và y, nó sẽ thêm "FooBar" vào chuỗi output.
Nếu số đó chia hết cho x (nhưng không chia hết cho cả x và y), nó sẽ thêm "Foo" vào chuỗi output.
Nếu số đó chia hết cho y (nhưng không chia hết cho cả x và y), nó sẽ thêm "Bar" vào chuỗi output.
Nếu số đó không chia hết cho x, y hoặc cả hai, nó sẽ thêm số đó vào chuỗi output.
Cuối cùng, chương trình sẽ đặt nội dung văn bản của phần tử HTML có ID "output" thành toàn bộ chuỗi output.
```
# Problem2
```
Khi người dùng nhấn nút "Check Palindrome", hàm checkPalindrome() được gọi.
Trong hàm checkPalindrome(), chương trình lấy giá trị của trường nhập liệu (có ID là input-text) và lưu vào biến inputText.
Sau đó, chương trình sẽ gọi hàm isPalindrome() và truyền vào chuỗi inputText.
Hàm isPalindrome() sẽ thực hiện các bước sau:
Loại bỏ các ký tự không phải chữ và số, sau đó chuyển toàn bộ chuỗi sang chữ thường. Điều này giúp chương trình có thể kiểm tra palindrome mà không bị ảnh hưởng bởi các ký tự đặc biệt hoặc chữ hoa/chữ thường.
So sánh các ký tự từ đầu và cuối chuỗi. Nếu có bất kỳ cặp ký tự nào không giống nhau, hàm sẽ trả về false, nghĩa là chuỗi không phải là palindrome.
Nếu quá trình so sánh hoàn tất mà không tìm thấy cặp ký tự khác nhau, hàm sẽ trả về true, nghĩa là chuỗi là palindrome.
Dựa vào kết quả trả về của hàm isPalindrome(), chương trình sẽ cập nhật nội dung và class CSS của phần tử hiển thị kết quả (có ID là result).
```

# PART2
# Problem3
```
Mã hóa HTML: Hàm escapeHTML() được sử dụng để mã hóa các ký tự HTML đặc biệt trong các từ, nhằm tránh các cuộc tấn công Cross-Site Scripting (XSS).
Nhóm các từ đồng âm: Hàm groupAnagrams() sử dụng một Map để lưu trữ các nhóm anagram. Nó sắp xếp các chữ cái trong mỗi từ theo thứ tự bảng chữ cái, sau đó sử dụng kết quả này làm khóa trong Map để nhóm các từ có cùng cấu trúc chữ cái.
Tạo tên nhóm: Hàm generateGroupName() tạo tên cho mỗi nhóm anagram bằng cách sử dụng các chữ cái đầu tiên của từ đầu tiên trong nhóm.
Tạo HTML cho các nhóm anagram: Hàm createAnagramGroupHTML() tạo mã HTML cho từng nhóm anagram, bao gồm tiêu đề và danh sách các từ trong nhóm. Ở đây, có hai cách thực hiện: sử dụng Template Literals và sử dụng DOM Manipulation.
Xử lý sự kiện nhấp nút: Sự kiện "click" trên nút "Group" được xử lý bởi hàm ẩn danh. Nó lấy các từ từ ô input, gọi hàm groupAnagrams() để nhóm các từ đồng âm, và sau đó sử dụng hàm createAnagramGroupHTML() để tạo mã HTML cho từng nhóm, rồi cập nhật vào container output.
```

# Problem4
```
Hàm rotateSparseArrayRight(arr, steps):
Lấy độ dài của mảng đầu vào arr và lưu vào biến n.
Tạo một mảng mới result có cùng độ dài với arr, và khởi tạo tất cả các phần tử bằng null.
Dùng vòng lặp for để duyệt qua từng phần tử của arr:
Tính toán vị trí mới newIndex của phần tử khi xoay sang phải bằng công thức (i + steps) % n.
Gán giá trị của phần tử tại vị trí i trong arr vào vị trí newIndex trong result.
Trả về mảng result đã được xoay sang phải.

Hàm rotateSparseArrayLeft(arr, steps):
Tương tự như hàm rotateSparseArrayRight(), nhưng tính toán vị trí mới newIndex của phần tử khi xoay sang trái bằng công thức (i - steps + n) % n.
Điều này đảm bảo rằng khi i - steps trở thành số âm, chúng ta sẽ cộng thêm n để vị trí mới luôn nằm trong phạm vi của mảng.
Trả về mảng result đã được xoay sang trái.
```
# PART3
# Problem5
```
Định nghĩa một mảng colorOptions chứa các tùy chọn màu.
Lấy tham chiếu đến phần tử <select> có ID 'color' và thêm các tùy chọn màu vào nó.
Lấy tham chiếu đến form và div 'result'.
Thêm sự kiện 'submit' cho form và xử lý sự kiện này.
Trong hàm handleFormSubmit():
    Lấy giá trị của các trường input (name, age, color).
    Lấy nhãn của màu.
    Tạo và hiển thị thẻ thông tin người dùng.
    Cập nhật màu nền của trang.
Định nghĩa các hàm phụ trợ:
    getColorLabel(): lấy nhãn của màu từ mảng colorOptions.
    createUserInfoCard(): tạo và trả về HTML của thẻ thông tin người dùng.
    updateBackgroundColor(): cập nhật màu nền của trang.
```
# PART4
``` 
Đầu tiên, đoạn code này định nghĩa một biến API_URL chứa đường dẫn API để lấy dữ liệu thời tiết từ một trang web thời tiết nào đó.

Tiếp theo, nó định nghĩa một hàm getWeatherData sử dụng giao thức fetch để gọi API và lấy dữ liệu thời tiết cho một thành phố cụ thể. Nếu có bất kỳ lỗi nào xảy ra trong quá trình này, hàm sẽ ném ra một lỗi.

Hàm displayWeatherInfo được sử dụng để hiển thị thông tin thời tiết trên giao diện người dùng. Nó nhận vào dữ liệu thời tiết và một phần tử HTML để hiển thị thông tin.

Tiếp theo, đoạn code tạo ra hai phần tử HTML: một input để nhập tên thành phố và một phần tử để hiển thị thông tin thời tiết.

Hàm fetchWeather được định nghĩa để xử lý việc tìm kiếm thời tiết khi người dùng nhập tên thành phố và nhấn nút "Lấy thời tiết". Nó gọi hàm getWeatherData để lấy dữ liệu thời tiết và sau đó sử dụng hàm displayWeatherInfo để hiển thị thông tin trên giao diện.

Cuối cùng, một sự kiện click được thêm vào nút "Lấy thời tiết" để kích hoạt hàm fetchWeather khi người dùng nhấn vào.
```
