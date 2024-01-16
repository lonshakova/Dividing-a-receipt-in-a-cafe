<template>
    <div>
        <div class="card-product">
            <div class="product">Огурец</div>
            <div class="cost-payer">
                <div class="cost">500</div>
                <div class="payer">Анна</div>
            </div>
            <div class="eater">
                <div class="name">Антон</div>
                <div class="name">Антон</div>
                <div class="name">Антон</div>
            </div>
            <div class="btns">
                <button class="btn">Изменить</button>
                <button class="btn">Удалить</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card-product {
    margin-top: 30px;
    padding-top: 25px;
    height: 400px;
    width: 300px;
    display: flex;
    align-items: center;
    background: #EAFAF1;
    flex-direction: column;
    border: 1px solid #000000;
    border-radius: 15px;
    color: #000;
    font-family: Arial;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
}

.product {
    width: 250px;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 15px;
    color: #000;
}

.cost-payer {
    margin-top: 20px;
    width: 250px;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
}

.cost {
    width: 90px;
    height: 51px;
    background: #1ABC9C;
    border-radius: 15px 0px 0px 15px;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #FFF;
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
}

.payer {
    width: 250px;
    height: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 0px 15px 15px 0px;
}

.eater {
    margin-top: 20px;
    width: 250px;
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 15px;
}

.btns {
    width: 250px;
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.btn {
    padding: 15px 10px;
    border-radius: 15px;
    border: 1px solid #148F77;
    background: #1ABC9C;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
}
.btn:hover{
    background:#148F77;
}
</style>