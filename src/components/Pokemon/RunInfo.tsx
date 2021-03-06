/** @jsx jsx */
import React, { Fragment } from 'react';
import { css, jsx } from '@emotion/core';
import { v4 as GUID } from 'uuid';
import { Pokemon, PokemonSpecies, RandomizerRunFile } from '../../../types/pokemon';
import { Cog, EditPencil, Trash } from '../Icons';
import { Subheading, Headline } from '../Typography';
import { PokemonCard } from './PokemonCard';
import { ThemeContext } from '../../store/ThemeContext';
import { TransparentInput } from '../Common/TransparentInput';
import { SearchPokemon } from './SearchPokemon';
import { getDefaultPokemonId } from '../../util/pokemon';
import { Button } from '../Common/Button';
import { Modal } from '../Common/Modal';
import { Tooltip } from '../Common/Tooltip';
import { SavingStatus } from './SavingStatus';
import { RandomTeamModal } from './RandomTeamModal';
import { SettingsModal } from './SettingsModal';
import { useSiteData } from 'react-static';
import { SiteData } from '../../../types/static';

interface RunInfoProps {
  run: RandomizerRunFile;
  updateRun: (updatedRun: RandomizerRunFile) => void;
  deleteRun: () => Promise<void>;
  saving: boolean;
}

export const RunInfo: React.FC<RunInfoProps> = props => {
  const { run, updateRun, deleteRun, saving } = props;
  const pokemonData = useSiteData<SiteData>();
  const { space, textColor, typography } = React.useContext(ThemeContext);
  const [editingName, setEditingName] = React.useState<boolean>(false);
  const [runName, setRunName] = React.useState<string>(run.name);
  const [showConfirm, setShowConfirm] = React.useState<boolean>(false);
  const [showRandomTeam, setShowRandomTeam] = React.useState<boolean>(false);
  const [showSettingsModal, setShowSettingsModal] = React.useState<boolean>(false);
  const runNameInputRef = React.useRef<HTMLInputElement>(null);

  const iconStyle = css`
    width: ${space.l};
    margin-left: ${space.s};
    fill: ${textColor.accentText};
    cursor: pointer;
    &:hover {
      fill: ${textColor.primaryText};
    }
  `;

  const editName = React.useCallback(() => {
    setEditingName(true);
    setRunName(run.name);
  }, [run.name]);

  const nameChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setRunName(event.target.value);
  }, []);

  const saveName = React.useCallback(() => {
    if (runName && runName !== '') {
      const newRun = { ...run };
      newRun.name = runName;
      updateRun(newRun);
    }
    setEditingName(false);
  }, [run, runName, updateRun]);

  React.useEffect(() => {
    if (editingName && runNameInputRef.current) {
      runNameInputRef.current.focus();
    }
  }, [editingName]);

  const updatePokemon = React.useCallback(
    (runId: string) => (updated: Pokemon) => {
      const newPokemon = [...run.pokemon];
      const newTeam = [...run.team];
      const replaceIndex = newPokemon.findIndex(p => p.runId === runId);
      const teamReplaceIndex = newTeam.findIndex(p => p.runId === runId);

      const newRun = { ...run };
      if (replaceIndex !== -1) {
        newPokemon[replaceIndex] = updated;
        if (teamReplaceIndex !== -1) {
          // Remove pokemon if it was benched
          if (updated.benched) {
            newTeam.splice(teamReplaceIndex, 1);
          }
          // Replace pokemon otherwise
          else {
            newTeam[teamReplaceIndex] = updated;
          }
          newRun.team = newTeam;
        }
      } else {
        newPokemon.push(updated);
      }
      newRun.pokemon = newPokemon;
      updateRun(newRun);
    },
    [run, updateRun]
  );

  const addPokemon = React.useCallback(
    async (species: PokemonSpecies) => {
      const pokemon = pokemonData.pokemon[getDefaultPokemonId(species)];
      pokemon.runId = GUID();
      updatePokemon(pokemon.runId)(pokemon);
    },
    [pokemonData.pokemon, updatePokemon]
  );

  const removePokemon = React.useCallback(
    (runId: string) => () => {
      const newPokemon = [...run.pokemon];
      const newTeam = [...run.team];
      const removeIndex = newPokemon.findIndex(p => p.runId === runId);
      const teamRemoveIndex = newTeam.findIndex(p => p.runId === runId);
      if (removeIndex !== -1 || teamRemoveIndex !== -1) {
        const newRun = { ...run };
        if (removeIndex !== -1) {
          newPokemon.splice(removeIndex, 1);
          newRun.pokemon = newPokemon;
        }
        if (teamRemoveIndex !== -1) {
          newTeam.splice(teamRemoveIndex, 1);
          newRun.team = newTeam;
        }
        updateRun(newRun);
      }
    },
    [run, updateRun]
  );

  const doDeleteRun = React.useCallback(async () => {
    await deleteRun();
    setShowConfirm(false);
  }, [deleteRun]);

  const editingKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        saveName();
      } else if (event.key === 'Escape') {
        setEditingName(false);
      }
    },
    [saveName]
  );

  const benchedPokemon = React.useMemo(() => run.pokemon.filter(p => p.benched), [run.pokemon]);
  const pokemonList = React.useMemo(() => {
    const benchedPokemon: Pokemon[] = [];
    const pokemonList = run.pokemon.filter(p => {
      if (p.benched) {
        benchedPokemon.push(p);
        return false;
      }
      return true;
    });
    pokemonList.push(...benchedPokemon);
    return pokemonList;
  }, [run.pokemon]);

  return (
    <div>
      <div
        css={css`
          display: flex;
          height: 52px;
        `}>
        {!editingName && (
          <Fragment>
            <Headline>{run.name}</Headline>
            <Tooltip text="Rename">
              <EditPencil css={iconStyle} onClick={editName} />
            </Tooltip>
            <Tooltip text="Settings">
              <Cog css={iconStyle} onClick={() => setShowSettingsModal(true)} />
            </Tooltip>
            <Tooltip text="Delete">
              <Trash css={iconStyle} onClick={() => setShowConfirm(true)} />
            </Tooltip>
            <div
              css={css`
                flex-grow: 1;
              `}
            />
            <SavingStatus saving={saving} />
          </Fragment>
        )}
        {editingName && (
          <TransparentInput
            css={css`
              font-size: ${typography.headline.size};
            `}
            ref={runNameInputRef}
            onChange={nameChange}
            onKeyDown={editingKeyDown}
            onBlur={() => setEditingName(false)}
            value={runName}
          />
        )}
      </div>
      <div
        css={css`
          display: flex;
          align-items: center;
        `}>
        <Subheading
          css={css`
            margin: 0;
          `}>{`${run.pokemon.length} Pokemon caught (${benchedPokemon.length} benched)`}</Subheading>
        <div
          css={css`
            flex-grow: 1;
          `}
        />
        <Button onClick={() => setShowRandomTeam(true)}>Random Team</Button>
      </div>
      <SearchPokemon onChange={addPokemon} placeholder="Caught a pokemon..." />
      {pokemonList.map(p => (
        <PokemonCard
          key={p.runId}
          pokemon={p}
          removePokemon={removePokemon(p.runId)}
          updatePokemon={updatePokemon(p.runId)}
        />
      ))}
      <RandomTeamModal open={showRandomTeam} onClose={() => setShowRandomTeam(false)} run={run} updateRun={updateRun} />
      <SettingsModal
        open={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
        run={run}
        updateRun={updateRun}
      />
      <Modal open={showConfirm} onClose={() => setShowConfirm(false)} title="Confirm delete">
        Are you sure you want to delete this run? This cannot be undone.
        <div
          css={css`
            display: flex;
            justify-content: flex-end;
            margin-top: ${space.m};
          `}>
          <Button onClick={doDeleteRun}>Delete</Button>
          <Button styleType="hollow" onClick={() => setShowConfirm(false)}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};
