
let orderCode = "";
let isValidOrder = false;

do {
    console.log("\n========== MENU ==========");
    console.log("1. Nhập mã đơn hàng");
    console.log("2. Tính tiền và in hóa đơn");
    console.log("3. Thoát chương trình");
    console.log("===========================");

    let choice = prompt("Nhập lựa chọn:");

    switch (choice) {
        case "1":
            orderCode = prompt("Nhập mã đơn hàng:");

            orderCode = orderCode.trim().toUpperCase();

            if (orderCode.startsWith("GYM-") && orderCode.length >= 8) {
                isValidOrder = true;
                console.log("Mã đơn hàng hợp lệ:", orderCode);
            } else {
                isValidOrder = false;
                console.log("Mã đơn hàng không hợp lệ!");
            }
            break;

        case "2":
            if (!isValidOrder) {
                console.log("Vui lòng nhập mã đơn hàng hợp lệ trước!");
                break;
            }

            const products = [
                ["SHAKER", "Bình lắc", 120000],
                ["GLOVES", "Găng tay", 180000],
                ["STRAP", "Dây kéo lưng", 150000]
            ];

            let total = 0;

            console.log("\n" + "-".repeat(40));
            console.log("           HÓA ĐƠN GYM");
            console.log("-".repeat(40));
            console.log(`Mã đơn hàng: ${orderCode}`);
            console.log("-".repeat(40));

            console.log("Sản phẩm          Giá");
            console.log("-".repeat(40));

            for (let i = 0; i < products.length; i++) {
                console.log(
                    `${products[i][1].padStart(18)} ${products[i][2]
                        .toLocaleString("vi-VN")
                        .padStart(10)}`
                );

                total += products[i][2];
            }

            const vip = prompt("Khách có thẻ VIP? (Y/N)");

            let discount = 0;

            if (vip.trim().toUpperCase() === "Y") {
                discount = total * 0.1;
            }

            const finalPrice = total - discount;

            console.log("-".repeat(40));
            console.log(`Tạm tính: ${total.toLocaleString("vi-VN")} VNĐ`);
            console.log(`Giảm giá: ${discount.toLocaleString("vi-VN")} VNĐ`);
            console.log(
                `Thanh toán: ${finalPrice.toLocaleString("vi-VN")} VNĐ`
            );
            console.log("-".repeat(40));

            break;

        case "3":
            console.log("Đã thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn 1, 2 hoặc 3.");
    }

    if (choice === "3") {
        break;
    }

} while (true);