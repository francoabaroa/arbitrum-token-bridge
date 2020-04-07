/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from 'ethers'
import { Listener, Provider } from 'ethers/providers'
import { Arrayish, BigNumber, BigNumberish, Interface } from 'ethers/utils'
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from '.'

interface ERC20Interface extends Interface {
  functions: {
    approve: TypedFunctionDescription<{
      encode([spender, amount]: [string, BigNumberish]): string
    }>

    totalSupply: TypedFunctionDescription<{ encode([]: []): string }>

    transferFrom: TypedFunctionDescription<{
      encode([sender, recipient, amount]: [
        string,
        string,
        BigNumberish
      ]): string
    }>

    balanceOf: TypedFunctionDescription<{
      encode([account]: [string]): string
    }>

    transfer: TypedFunctionDescription<{
      encode([recipient, amount]: [string, BigNumberish]): string
    }>

    allowance: TypedFunctionDescription<{
      encode([owner, spender]: [string, string]): string
    }>

    name: TypedFunctionDescription<{ encode([]: []): string }>

    symbol: TypedFunctionDescription<{ encode([]: []): string }>

    decimals: TypedFunctionDescription<{ encode([]: []): string }>
  }

  events: {
    Transfer: TypedEventDescription<{
      encodeTopics([from, to, value]: [
        string | null,
        string | null,
        null
      ]): string[]
    }>

    Approval: TypedEventDescription<{
      encodeTopics([owner, spender, value]: [
        string | null,
        string | null,
        null
      ]): string[]
    }>
  }
}

export class ERC20 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ERC20
  attach(addressOrName: string): ERC20
  deployed(): Promise<ERC20>

  on(event: EventFilter | string, listener: Listener): ERC20
  once(event: EventFilter | string, listener: Listener): ERC20
  addListener(eventName: EventFilter | string, listener: Listener): ERC20
  removeAllListeners(eventName: EventFilter | string): ERC20
  removeListener(eventName: any, listener: Listener): ERC20

  interface: ERC20Interface

  functions: {
    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    totalSupply(): Promise<BigNumber>

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    balanceOf(account: string): Promise<BigNumber>

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    allowance(owner: string, spender: string): Promise<BigNumber>

    name(): Promise<string>

    symbol(): Promise<string>

    decimals(): Promise<number>
  }

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  totalSupply(): Promise<BigNumber>

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  balanceOf(account: string): Promise<BigNumber>

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  allowance(owner: string, spender: string): Promise<BigNumber>

  name(): Promise<string>

  symbol(): Promise<string>

  decimals(): Promise<number>

  filters: {
    Transfer(from: string | null, to: string | null, value: null): EventFilter

    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter
  }

  estimate: {
    approve(spender: string, amount: BigNumberish): Promise<BigNumber>

    totalSupply(): Promise<BigNumber>

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish
    ): Promise<BigNumber>

    balanceOf(account: string): Promise<BigNumber>

    transfer(recipient: string, amount: BigNumberish): Promise<BigNumber>

    allowance(owner: string, spender: string): Promise<BigNumber>

    name(): Promise<BigNumber>

    symbol(): Promise<BigNumber>

    decimals(): Promise<BigNumber>
  }
}
