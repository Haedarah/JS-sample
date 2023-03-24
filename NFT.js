let array = [];

function mintNFT(name, desc, dor, address, pur)
{
    let NFT=
    {
        "Name":name,
        "Description":desc,
        "Date of Release":dor,
        "Owner's Address":address,
        "Purchased for":pur
    };
    array.push(NFT);

    console.log("An NFT has been added to the array!");
}

function listNFTs()
{
    for (var i=0; i<array.length; i++)
    {
        console.log("NFT #"+(i+1));
        console.log(array[i]);
    }
}

function getTotalSupply ()
{
    console.log("The number of the NFTs we have: ",array.length);
}

mintNFT("JS Course", "A proof of learn NFT", "24-03-2023", "06x123sdhfh13", 1.332);
mintNFT("Gold", "An asset possesion proof", "01-08-2021", "04xasd8vn2mf4", 0.73);
mintNFT("The Wall", "Digital Art", "09-09-2022", "0yxfwnv295jf2", 1.5);

listNFTs();

getTotalSupply();