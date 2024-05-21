<template>
  <div class="wrapper">
    <header>
      <img src="../assets/logo.svg" style="margin-right: 14px">
      <h2>Сим Центр</h2>
      <img src="../assets/sidebar/tui-accordion-item.svg" class="btn__sidebar"/>
    </header>
    <main>
      <div class="direction">
        <img src="../assets/sidebar/CalendarBlank.svg" />
        <div>Расписание</div>
      </div>
      <div class="direction active">
        <img src="../assets/sidebar/GraduationCap.svg" />
        <div>Учебные группы</div>
      </div>
      <div class="direction">
        <img src="../assets/sidebar/Door.svg" />
        <div>Список комнат</div>
      </div>
      <div class="direction">
        <img src="../assets/sidebar/UserList.svg" />
        <div>Пользователи</div>
      </div>

      <div class="direction">
        <img src="../assets/sidebar/VideoCamera.svg" />
        <div>Список устройств</div>
      </div>
      <div class="direction">
        <img src="../assets/sidebar/Icons%20(1).svg" />
        <div>Настройки системы</div>
      </div>
      <div class="direction">
        <img src="../assets/sidebar/Icons%20(2).svg" />
        <div>Архив</div>
      </div>
    </main>
    <footer>
      <div class="profile">
        <div class="text">
          <div class="title">Барнаби Мармадюк</div>
          <div class="post">Преподаватель</div>
        </div>
        <div class="avatar">
          <img src="../assets/sidebar/avatar.svg">
        </div>
      </div>
      <div class="exit">
        <div class="direction">
          <img src="../assets/sidebar/log-out.svg" />
          <div>Выйти</div>
        </div>
      </div>
      <div class="lang">
        <div class="direction">
          <img src="../assets/sidebar/flag.svg" />
          <div>Русский</div>
        </div>
        <img src="../assets/sidebar/dropdown.svg" style="margin: 12px" />
      </div>
      <div class="version">
        Версия 1.02
      </div>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper{
  background-color: #FFFFFF;
  height: 100vh;
  margin-right: 10px;
  padding: 0 12px 12px 12px;
  width: 250px;
}
header{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 19px 30px;
  white-space: nowrap;
}
footer{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  margin-bottom: 12px;
  width: 250px;
  padding: 12px;
}
.profile{
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 1);
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.12);
  margin-bottom: 18px;
  .title{
    line-height: 24px;
    font-size: 15px;
    font-weight: 800;
  }
  .post{
    font-weight: 500;
    font-size: 13px;
    color: rgba(47, 49, 68, 0.65);
    line-height: 20px;
  }
}
.direction{
  margin: 4px 0px ;
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 12px;
  padding-right: 48px;
  font-size: 15px;
  font-weight: 800;
  white-space: nowrap;
  img{
    margin-right: 12px;
  }
  &.active{
    background-color: #3761F3;
    color: #FFFFFF;
  }
  &.active:hover{
    color: #000;
  }
  &:hover{
    background-color: #F4F4F4;
  }
}
.lang{
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(224, 224, 224, 1);
  border-radius: 12px;
  margin-bottom: 18px;
  &:hover{
    background-color: #F4F4F4;
  }
  .direction:hover{
    background: none;
  }
}
.version{
  color: rgba(47, 49, 68, 0.65);
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
}
.btn__sidebar{
  position: relative;
  left: 45px;
}
</style>