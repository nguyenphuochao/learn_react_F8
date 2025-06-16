import React, { useEffect, useState } from 'react'

function UseEffectWithPreviewAvatar() {
    const [avatar, setAvatar] = useState();

    // Xóa ảnh cũ trước đó khỏi bộ nhớ để tránh rò rỉ
    useEffect(() => {
        // clean up function
        return () => avatar && URL.revokeObjectURL(avatar.review);
    }, [avatar])

    const handleReviewAvatar = (e) => {
        const file = e.target.files[0];
        // URL.createObjectURL(file) lưu vào bộ nhớ tạm
        // file.review là thêm thuộc tính review vào object
        file.review = URL.createObjectURL(file);
        setAvatar(file);

        e.target.value = null; // reset value để cho chọn lại file giống nhau
    }

    return (
        <div>
            <input
                type="file"
                onChange={handleReviewAvatar}
            />

            {
                avatar && (
                    <img src={avatar.review} alt="avatar" width={"100px"} />
                )
            }
        </div>
    )
}

export default UseEffectWithPreviewAvatar
