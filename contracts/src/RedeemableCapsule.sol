// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Ownable} from "solady/src/auth/Ownable.sol";
import {ERC1155} from "solady/src/tokens/ERC1155.sol";

contract RedeemableCapsule is ERC1155, Ownable {

    string private constant _tokenURI = "https://gateway.ipfs.io/ipfs/QmRaijbw5S62KZbZqFuzFovn4ovvVYVwqTJhog67wAiWve";

    uint256 public constant TOKEN_ID = 1; // This is the ID for the non-unique tokens.
    uint256 public constant TOKEN_LIMIT = 10; // Maximum tokens an address can hold.

    // Mapping to track the amount of tokens owned by an address.
    mapping (address => uint256) private _tokensOwned;

    constructor() ERC1155() {
  	    _initializeOwner(msg.sender);
    }

    function uri(uint256 tokenId) public view override returns (string memory) {
        return _tokenURI;
    }

    function mint(address account, uint256 amount, bytes memory data) public  {
        require(_tokensOwned[account] + amount <= TOKEN_LIMIT, "Exceeds token limit for address");

        // Update the tokens owned by the account
        _tokensOwned[account] += amount;

        // Mint the non-unique token to the specified account using the TOKEN_ID
        _mint(account, TOKEN_ID, amount, data);
    }

    function tokensOwnedBy(address account) public view returns (uint256) {
        return _tokensOwned[account];
    }
}
