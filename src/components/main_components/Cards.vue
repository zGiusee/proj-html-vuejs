<script>
export default {
    name: "Cards",
}
</script>

<template>
    <div class="card-position">
        <div class="container">
            <div class="row">

                <!-- Card 1 -->
                <div class="col-md-4">
                    <div class="card custom-card">
                        <div class="custom-icon">
                            <i class="bi bi-speaker"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">ORIGINAL IDEAS</h5>
                            <p class="card-text">Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Random Text.</p>
                        </div>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="col-md-4">
                    <div class="card custom-card">
                        <div class="custom-icon">
                            <i class="bi bi-disc bi-4x"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">MUSIC STUDIO</h5>
                            <p class="card-text">Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Random Text.</p>
                        </div>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="col-md-4">
                    <div class="card custom-card">
                        <div class="custom-icon">
                            <i class="bi bi-headphones"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">ACOUSTIC LOVER</h5>
                            <p class="card-text">Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Random Text.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../../styles/generals.scss' as *;

.custom-icon {
    i {
        font-size: 100px;
    }
}

.card-position {
    position: absolute;
    left: 270px;
    top: -170px;
}

.card {
    text-align: center;
    border-radius: 0% !important;
    padding: 50px;
}

.custom-card {
    background-color: #121212 !important;
    color: #fff !important;

}
</style>
