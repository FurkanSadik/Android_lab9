Furkan Sadık Kocabaş-200404001-
Bilgisayar Mühendisliği Öğrencisi 4. Sınıf Öğrencisi

TravelApp (React Native – Expo)
Proje Hocalarımızın daha rahat anlayabilmesi için button ve commitler ingilizce olarak ayarlandı.
Bu proje, React Native ve Expo kullanılarak geliştirilmiş basit bir seyahat uygulamasıdır. Uygulama içerisinde farklı ekranlar arasında geçiş yapılmakta, ekranlar arasında parametre ile veri alışverişi yapılmakta ve alt menü (Bottom Tab Navigation) yapısı kullanılmaktadır.



Kullanılan Teknolojiler:

React Native

Expo

React Navigation (Stack Navigator + Bottom Tab Navigator)

Ionicons icon kütüphanesi



Uygulama Özellikleri:

Home ve Details ekranları arasında Stack Navigation ile geçiş yapılması

Home ekranından Details ekranına şehir adı ve rating bilgisinin Route Params ile gönderilmesi

Explore & Settings sekmeleri arasında Bottom Tab Navigation kullanımı

Aktif / pasif ikon renkleri ile dinamik tab bar simgeleri

screens klasör yapısı ile modüler ekran organizasyonu



Uygulamadaki Ekranlar:

Home Screen:
Paris, London ve Tokyo şehirleri için butonlar bulunur. Kullanıcı bir butona bastığında ilgili şehrin adı ve rating bilgisi Details ekranına aktarılır.

Details Screen:
Home ekranından gönderilen parametrelere göre "Welcome to Şehir" yazısı ve rating değeri gösterilir. Değer yüksekse farklı bir mesaj çıkar. “Go Back” butonu ile geri dönülebilir.

Settings Screen:
Basit bir ayarlar sayfası işlevi görür. Uygulama sürümü bilgisi (App Version 1.0) gösterilir.



Proje Dosya Yapısı:

TravelApp

.App.js

.package.json

.screens

   ..HomeScreen.js

   ..DetailsScreen.js

   ..SettingsScreen.js

.assets



Öğrenilen Konseptler:

NavigationContainer yapısı

Stack ve Tab navigation farkları

Route Params ile veri taşıma mantığı

screenOptions ile özelleştirme

Ionicons ile ikon kullanımı
