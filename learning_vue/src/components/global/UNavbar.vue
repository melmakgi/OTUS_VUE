<script setup></script>

<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark"
    aria-label="Offcanvas navbar large"
  >
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">OTUS курс по Vue.js</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar2"
        aria-controls="offcanvasNavbar2"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end text-bg-dark"
        tabindex="-1"
        id="offcanvasNavbar2"
        aria-labelledby="offcanvasNavbar2Label"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbar2Label">
            Книги и авторы
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <RouterLink
                class="nav-link active"
                aria-current="page"
                :to="{ name: 'googleBooks' }"
                >Google Book</RouterLink
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Книги</a
              >
              <ul class="dropdown-menu">
                <li>
                  <RouterLink class="dropdown-item" :to="{ name: 'books' }"
                    >Витрина книг</RouterLink
                  >
                </li>
                <hr class="dropdown-divider" />
                <li>
                  <RouterLink class="dropdown-item" :to="{ name: 'addBook' }"
                    >Добавить книгу</RouterLink
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Авторы</a
              >
              <ul class="dropdown-menu">
                <li>
                  <RouterLink class="dropdown-item" :to="{ name: 'authors' }"
                    >Авторы книг</RouterLink
                  >
                </li>
                <hr class="dropdown-divider" />
                <li>
                  <RouterLink class="dropdown-item" :to="{ name: 'addAuthor' }"
                    >Добавить автора</RouterLink
                  >
                </li>
              </ul>
            </li>
            <li>
              <RouterLink class="nav-link" :to="{ name: 'about' }"
                >О ДЗ</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
