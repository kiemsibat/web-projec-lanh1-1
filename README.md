
Mục đích của demo

- Vận dụng kiến thức đã tìm hiểu như Jenkins, Docker , Git , Ngrok để 
tạo ra một hệ thống tự động mỗi khi push code lên thì jenkins sẽ lắng nghe
và clone code về local và file Dockerfile sẽ tự động build ra images và push
lên dockerhub.
- Sử dụng docker compose để run muti container để chạy 1 web hoàn chỉnh bao gồm backend
front end và DB

Cách chạy ứng dụng
- Đầu tiên ta vào thư mục của web-projec-lanh1 và dùng lệnh docker-compose\
để chạy 1 trang web hoàn chỉnh lên và chỉnh sửa code , sau đó ta dùng các lệnh của git để push code lên 
jenkins sẽ lắng nghe , nếu có sự kiện push ngay lập tức nó sẽ đọc jenkinsfile có trong thư mục trên và chạy tuần tự
theo như trong jenkinsfile đã định nghĩa và sẽ push code về local của VM và tự động build Dockerfile ở cùng cấp với jenkins file
và tự động đẩy nó lên repo có tên là kiemsibat/testhello:v10  

## Todo list example with NodeJS, GraphQL, MongoDB, React and Docker

    Simple todo list

### Usage

    docker-compose up -d