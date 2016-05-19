# wget 常見用法
[Larry Lu](https://github.com/Larry850806)

---

## 內容
- 下載檔案
- 備份網頁
- 備份整個網站

---

## 1.下載檔案
```bash
wget http://ipv4.download.thinkbroadband.com/5MB.zip -O 5MB.zip
```
### ↓
----
```bash
wget http://ipv4.download.thinkbroadband.com/5MB.zip -O 5MB.zip

-O  下載下來的檔名
```
這個檔案只有 5MB 一下子就下載好了
----
檔案太大的話可以用續傳功能
上次下載到哪裡會繼續下載
```bash
wget -c http://ipv4.download.thinkbroadband.com/5MB.zip

-c  續傳
```
----
上次下載到 25% 網路就斷了
![](http://imgur.com/RHt0Erp.png)
繼續下載到 58%
![](http://imgur.com/cD9sg5m.png)
----
如果網路不穩時可以設定重試次數
```bash
wget -t 10 http://ipv4.download.thinkbroadband.com/5MB.zip

-t 10   最多重試 10 次
-t 0    不斷重試直到成功為止
```
----
如果想要設定速度上限的話
```bash
wget --limit-rate=200k http://ipv4.download.thinkbroadband.com/5MB.zip

--limit-rate    速度上限
```
下載速限 200KB/s

---

## 2.備份網頁
![](http://imgur.com/4sApmZP.png)
```bash
wget -p -k https://www.google.com
```
### ↓
----
## 參數
```bash
wget -p -k https://www.google.com.tw

-p  下載網頁所需的所有檔案, 如圖片.背景音樂
-k  將相對連結轉為絕對連結, 可離線瀏覽
```
----
下載完會生出一個像這樣的資料夾
![](http://i.imgur.com/JMjX9kH.png)
進去把 index.html 打開就可以看到下載的網頁了
![](http://i.imgur.com/WkB5CJH.png)
----
再進到 images 裡面看一下
![](http://imgur.com/u18AwZs.png)
就可以找到 google 的 logo ~
![](http://imgur.com/thElnfF.png)

---

## 3.下載整個網站
#### 網站 != 網頁
#### 一個網站可能有很多網頁
### ↓
----
來看看[演算法筆記](http://www.csie.ntnu.edu.tw/~u91029/index.html)這個網站
![](http://imgur.com/Y4iMtPw.png)
#### 這個網站裡面有很多網頁
----
### 如果要把整個網站下載下來
```bash
wget -r -p -np -k http://www.csie.ntnu.edu.tw/~u91029/index.html

-r   遞迴下載網站內的所有檔案
-p   下載網頁所需的所有檔案, 如圖片.背景音樂
-np  不要下載父目錄的東西
-k   將相對連結轉為絕對連結, 可離線瀏覽

```
#### 因為整個網站有很多圖片跟文字
#### 所以要有點久
#### (我自己下載花了六分鐘左右)
----
#### 下載完進到裡面找 index.html 就可以離線瀏覽了
![](http://imgur.com/O7ztPzf.png)

---

# 參考資料
- 自己以前學的
- Google

---

# END
[Larry Lu](https://github.com/Larry850806)









