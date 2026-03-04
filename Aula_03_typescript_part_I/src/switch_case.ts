let perfil: string = "admin";

switch (perfil){
    case "admin":
        console.log("Acesso total ao sistema");
    break;
    case "usuário":
        console.log("Acesso limitado");
    break;
    case "visitante":
        console.log("Apenas leitura.");
    break;
    default:
        console.log("Perfil não reconhecido");
}