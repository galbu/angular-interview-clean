# Angular Interview
 
## Fake API

https://jsonplaceholder.typicode.com/

### http-client-example route

1. Afiseaza toate post-urile intr-un tabel
2. Adauga deasupra tabelului un paragraph in care vei afisa suma ID-urilor post-urilor   
3. Adauga o noua coloana in tabel numita "Actions", din aceasta coloana vei avea posibilitatea de sterge post-ului respectiv
4. Afiseaza titlul post-ului cu capslock

### form-example

1. Implementeaza form-ul cu ajutorul reactive forms pentru a putea adauga un post

    - userId sa fie de type number si required
    - id sa fie de type number si required
    - title sa fie de type text si required
    - body sa fie required
    - buttonul de submit trebuie sa fie enabled doar cand form-ul este valid si dirty
    - dupa salvare form-ul este resetat
  
2. Adauga un DeactivateGuard care sa nu te lase sa parasesti ruta daca form-ul e dirty

### existing-form-example

1. Afiseaza in form informatiile post-ului cu ID 1
2. Button de submit trebuie sa fie enabled doar cand form-ul este valid si dirty
3. La submit valorile din form sunt trimise catre backend iar user-ul este redirectat catre pagina cu toate post-urile


### Adauga un CanActivate guard pentru toate rutele

### Adauga un HttpInterceptor
