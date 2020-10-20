import React from 'react';

export default function aboutMe() {
    return (
      <>
        <div className="text-center">
          <h1 className="text-green-900 text-5xl font-bold">About Me</h1>
          <h2 className="text-yellow-500 text-xl italic">Piang - Mahasiswa Telkom University</h2>
        </div>
        <div className="text-center mt-6 px-10">
          <p className="text-gray-600">
            Nama lengkap saya Andi Alfian Adriawan, orang biasa memanggil saya Piang, saya lahir di Kolaka Sulawesi Tenggara dan sekarang tinggal di Makassar Sulawesi Selatan.
            {' '}
            <br />
            {' '}
            Saya senang mencoba hal-hal baru. Dunia
            {' '}
            <span className="font-bold">Web Developer</span>
            {' '}
            pun merupakan hal baru bagi saya, saya baru mengenal
            {' '}
            <span className="font-bold text-orange-500">HTML</span>
            ,
            {' '}
            <span className="font-bold text-blue-600">CSS</span>
            {' '}
            dan
            {' '}
            <span className="font-bold text-yellow-500">Javascript</span>
            {' '}
            pas saya masuk kuliah hehe. Dulu hobi saya main game, sekarang masih sama tapi sudah tidak terlalu, sekarang saya lebih suka menonton film dan mengerjakan tugas yang bwanywak dan menumpuk dan bikin sakit kepala, yah ini bukan hobi sih sebenarnya wkwkwk, cuman yah gak papalah basa basi dikit di CV biar panjang, tengkyu.
          </p>

          <h3 className="text-gray-600 pt-6 font-bold italic text-2xl">
            ”Sejujurnya, apa yang ingin kau lakukan dan bisa kau lakukan itu berbeda.
            {' '}
            <br />
            {' '}
            Siapapun yang menyadarinya lebih dulu, akan berhasil dibidangnya.”
            <br />
            {' '}
            (Fight for my Way)
          </h3>
        </div>
      </>
    );
}
