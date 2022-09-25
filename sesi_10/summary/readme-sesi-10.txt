Sesi 10 (230922)

--Redux--
>Redux merupakan state management
>Redux diperlukaan pada saat :
-complex data flow
-many actions
-same data used in multiple places

>Perubahan menjadi lebih terprediksi
>Dengan redux data menjadi terpusat hanya di store saja

>Redux Principle
-Single Source of Truth
-State is Read Only
-Change are made with pure functions
-One immutable store (store bersifat immutable, tidak bisa diubah melalui view, harus diubah melalui actions)
-Action trigger changes (object yang menjelaskan perubahan yang harus dilakukan)
-Reducer update the state (function dengan 2 parameter yaitu current state dan action apa yang terjadi
