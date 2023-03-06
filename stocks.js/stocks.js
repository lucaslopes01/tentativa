class Item {
  constructor() {
    this.id = 1;
    this.arrayItem = [];
  }
  salvar() {
    let item = this.lerDados();
    if (this.validaCampos(item)){
        this.adicionar(item);
    }
    console.log(this.validaCampo)
    this.listaTabela();
  }
  listaTabela(){
    let tbody = document.getElementById('tbody');
    tbody.innerText = '';
    for(let i = 0; i < this.arrayItem.length; i++) {
        let tr = tbody.insertRow();

        let td_id = tr.insertcell();
        let td_item = tr.insertcell();
        let td_estoque = tr.insertcell();
        let td_quantidade = tr.insertcell();
        let td_acoes = tr.insertcell();

        td_id.innerText = this.arrayItem[i].id;
        td_item.innerText = this.arrayItem[i].nomeItem;
        td_estoque.innerText = this.arrayItem[i].nomeEstoque;
        td_quantidade.innerText = this.arrayItem[i].Quantidade;

    }
  }
  
adicionar(item){
this.arrayItem.push(item);
this.id++;
}
  
  lerDados() {
    let item = {};
    item.id = this.id;
    item.nomeItem = document.getElementById("item").value;
    item.nomeEstoque = document.getElementById("estoque").value;
    item.Quantidade = document.getElementById("quantidade").value;
    return item;
  }
  validaCampo(item) {
    let msg = '';
    if (item.nomeItem == '') {
    msg += '-Informe o nome do item \n';
    }
   
    if (item.nomeEstoque == '') {
    msg += '-Informe o estoque do item \n';
    }
   
    if (item.Quantidade == '') {
    msg += '-Informe a quantidade de itens \n';
    }
    if (msg != ''){
        alert(msg);
        return false
    }
    return true;
  }

  cancelar() {}
}
var item = new Item();
